import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { isAuth } from 'redux/auth/auth-selectors';
import { useAuth } from 'hook';
export const RestrictedRoute = ({ children }) => {
  const isLogin = useSelector(useAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return children;
};
// import { Navigate } from 'react-router-dom';

// import { useAuth } from './hooks';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   // component - RegisterPage or LoginPage
//   const { isLoggedIn } = useAuth(); // isLoggedIn - true or false
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component; // if isLoggedIn is true, then redirect to redirectTo, else render Component
// };
