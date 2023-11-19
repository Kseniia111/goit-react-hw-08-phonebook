import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  addNewContact,
  editContact,
  getAllContactsThunk,
  removeContact,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePostFulfilled = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);

  toast.success(<div>Contact deleted!</div>, {
    duration: 4000,
    icon: '✅',
  });
};

const handleEditFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const updatedContact = state.items.findIndex(
    contact => contact.id === action.payload.id
  );

  if (updatedContact !== -1) {
    state.items[updatedContact] = action.payload;
  }
};

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentContact: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.pending, handlePending)
      .addCase(getAllContactsThunk.fulfilled, handleFulfilled)
      .addCase(getAllContactsThunk.rejected, handleRejected)
      .addCase(addNewContact.pending, handlePending)
      .addCase(addNewContact.fulfilled, handlePostFulfilled)
      .addCase(addNewContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, handleDeleteFulfilled)
      .addCase(removeContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, handleEditFulfilled)
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReducer = slice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, removeContact } from './contactsOperations';
// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contactsList',
//   initialState,
//   extraReducers: {
//     [fetchContacts.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [fetchContacts.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items = payload.sort((a, b) => a.name.localeCompare(b.name));
//     },
//     [fetchContacts.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },

//     [addContact.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [addContact.fulfilled]: (store, { payload }) => {
//       store.loading = true;
//       store.items = [...store.items, payload].sort((a, b) =>
//         a.name.localeCompare(b.name)
//       );
//     },
//     [addContact.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [removeContact.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [removeContact.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items = store.items.filter(item => item.id !== payload);
//     },
//     [removeContact.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//   },
// });

// export default contactsSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// import { fetchContacts, addContact, removeContact } from './contactsOperations';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(addContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(removeContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(removeContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(removeContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(item => item.id !== action.payload.id);
//       });
//     .addCase(editContact.pending, state => {
//       state.isLoading = true;
//     })
//     .addCase(editContact.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error.message;
//     })
//     .addCase(editContact.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       const updatedContact = action.payload;
//       state.items = state.items.map(item =>
//         item.id === updatedContact.id ? updatedContact : item
//       );
//     });
//   },
// });

// const { reducer: contactsReducer } = contactsSlice;
// export default contactsReducer;
