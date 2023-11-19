// import { createSlice } from '@reduxjs/toolkit';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilter: (_, { payload }) => payload,
//   },
// });

// export const { setFilter } = filterSlice.actions;

// export default filterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter(state, action) {
      return action.payload;
    },
  },
});

export const { contactsFilter } = slice.actions;
export const filterReducer = slice.reducer;
