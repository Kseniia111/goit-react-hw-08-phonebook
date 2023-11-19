import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
// import { useSelector } from 'react-redux';
// import {
//   selectEmail,
//   selectIsLoggedIn,
//   selectIsRefreshing,
//   selectUser,
// } from 'redux/auth/auth-selectors';

// export const useAuth = () => {
//   return {
//     isLoggedIn: useSelector(selectIsLoggedIn),
//     isRefreshing: useSelector(selectIsRefreshing),
//     user: useSelector(selectUser),
//     email: useSelector(selectEmail),
//   };
// };
