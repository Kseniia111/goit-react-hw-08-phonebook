import { logIn, logOut, refreshUser, register } from './auth-operations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// import { signUp, logIn, logOut, current } from './auth-operations';

// const initialState = {
//   user: {},
//   isLogin: false,
//   token: '',
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [signUp.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [signUp.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload.user;
//       store.token = payload.token;
//       store.isLogin = true;
//     },
//     [signUp.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },

//     [logIn.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [logIn.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload.user;
//       store.token = payload.token;
//       store.isLogin = true;
//     },
//     [logIn.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },

//     [logOut.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [logOut.fulfilled]: store => {
//       store.loading = false;
//       store.user = {};
//       store.token = '';
//       store.isLogin = false;
//     },
//     [logOut.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },

//     [current.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [current.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.user = payload;
//       store.isLogin = true;
//     },
//     [current.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.token = '';
//       store.error = payload;
//     },
//   },
// });

// export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// import { register, logIn, logOut, refreshUser } from './auth-operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './auth-operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

// export const authReducer = authSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './auth-operations';

// const authInitialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: authInitialState,
//   extraReducers: {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },

//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

// export const authReducer = authSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// import { register, logIn, logOut, refreshUser } from './auth-operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;
