export const getAuthError = ({ auth }) => auth.error || {};

// export const isAuth = ({ auth }) => auth.isLogin;

// export const getUser = ({ auth }) => auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectEmail = state => state.auth.email;
