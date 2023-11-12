import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//   filterStatus: '',
// };

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     filterContact: {
//       reducer(state, action) {
//         state.filterStatus = action.payload;
//       },
//     },
//   },
// });

// export const { filterContact } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
