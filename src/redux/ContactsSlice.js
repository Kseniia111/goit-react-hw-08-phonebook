import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contactsOperations';
import { logOut } from 'redux/auth/auth-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContact,
//   deleteContact,
//   fetchContacts,
//   redactContact,
// } from './contactsOperations';
// import { logOut } from './auth/auth-operations';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const pendingReduser = state => {
//   state.isLoading = true;
//   state.error = null;
// };
// const rejectedReduser = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
// const fetchContactsFulfilledReduser = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// };
// const addContactFulfilledReduser = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = [...state.items, action.payload];
// };
// const deleteContactFulfilledReduser = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = state.items.filter(item => item.id !== action.payload.id);
// };

// // Функція createSlice() це надбудова над createAction() та createReducer(), яка стандартизує та ще більше спрощує оголошення слайсу. Вона приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер.
// // Slice для поля 'contacts' з файлу store.js
// const contactsSlice = createSlice({
//   //назва поля в нашому стейті
//   name: 'contacts',
//   //початковий стан
//   initialState,

//   // Властивість extraReducers використовується щоб оголосити редюсери для «зовнішніх» типів екшенів, тобто тих, які не згенеровані з властивості reducers. Оскільки ці редюсери обробляють «зовнішні» екшени, для них не буде створено генератори екшенів в contactsSlice.actions, в цьому немає необхідності.
//   // builder - об'єкт з методами. Метод addCase для обробки action
//   // builder.addCase(actionCreatorOrType, reducer)
//   // actionCreatorOrType - тип екшену який будемо опрацьовувати
//   // reducer - редюсер, який буде обробляти цей екшен

//   // функціональна форма
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.pending, pendingReduser)
//       .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReduser)
//       .addCase(fetchContacts.rejected, rejectedReduser)
//       .addCase(addContact.pending, pendingReduser)
//       .addCase(addContact.fulfilled, addContactFulfilledReduser)
//       .addCase(addContact.rejected, rejectedReduser)
//       .addCase(deleteContact.pending, pendingReduser)
//       .addCase(deleteContact.fulfilled, deleteContactFulfilledReduser)
//       .addCase(deleteContact.rejected, rejectedReduser)
//       .addCase(redactContact.pending, pendingReduser)
//       .addCase(redactContact.fulfilled, (state, action) => {
//         const index = state.items.findIndex(
//           task => task.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//         state.items.unshift(action.payload);
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(redactContact.rejected, rejectedReduser)
//       .addCase(logOut, state => {
//         state.items = [];
//         state.error = null;
//         state.isLoading = false;
//       }),

// об'єктна форма
//   extraReducers: {
//   //завантаження данних з бекенду
//   [fetchContacts.pending]: handlPending,
//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   [fetchContacts.rejected]: handlRejected,
//   // додавання контакту
//   [addContact.pending]: handlPending,
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = [...state.items, action.payload];
//   },
//   [addContact.rejected]: handlRejected,
//   // видалення контакту
//   [deleteContact.pending]: handlPending,
//   [deleteContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = state.items.filter(item => item.id !== action.payload.id);
//   },
//   [deleteContact.rejected]: handlRejected,
// },
// });

// // console.log(contactsSlice.reducer);

// export const contactsReducer = contactsSlice.reducer;

// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import * as handlersForContactsSlice from './auth/handlersForContacts';
// import {
//   fetchContacts,
//   postContact,
//   deleteContact,
// } from './contactsOperations';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contactsArr: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: builder => {
//     builder
//       .addCase(
//         fetchContacts.fulfilled,
//         handlersForContactsSlice.handlerFetchContactsFulfilled
//       )
//       .addCase(
//         postContact.fulfilled,
//         handlersForContactsSlice.handlerPostContactFulfilled
//       )
//       .addCase(
//         deleteContact.fulfilled,
//         handlersForContactsSlice.handlerDeleteContactFulfilled
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           postContact.pending,
//           deleteContact.pending
//         ),
//         handlersForContactsSlice.handlePending
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           postContact.rejected,
//           deleteContact.rejected
//         ),
//         handlersForContactsSlice.handleRejected
//       );
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   editContatc,
// } from './contactsOperations.js';

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
//       .addCase(deleteContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(item => item.id !== action.payload.id);
//       })
//       .addCase(editContatc.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(editContatc.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       .addCase(editContatc.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const updatedContact = action.payload;
//         state.items = state.items.map(item =>
//           item.id === updatedContact.id ? updatedContact : item
//         );
//       });
//   },
// });

// const { reducer: contactsReducer } = contactsSlice;
// export default contactsReducer;
// const contactsInitialState = {
//   contacts: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = action.payload;
//     },
//     [fetchContacts.rejected]: handleRejected,
//     [addContact.pending]: handlePending,
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts.push(action.payload);
//     },
//     [addContact.rejected]: handleRejected,
//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.contacts.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.contacts.splice(index, 1);
//     },
//     [deleteContact.rejected]: handleRejected,
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
