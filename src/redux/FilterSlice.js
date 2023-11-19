import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { changeFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// const slice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilter(state, action) {
//       return action.payload;
//     },
//   },
// });

// export const { setFilter } = slice.actions;
// export const filterReducer = slice.reducer;
