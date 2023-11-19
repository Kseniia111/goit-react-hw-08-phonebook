import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hook/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data ...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};

// import { lazy, useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { Layout } from './Header/Header';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { useDispatch } from 'react-redux';
// //import { current } from 'redux/auth/auth-operations';
// import { NotFoundPage } from '../pages/NotFoundPage';
// import { refreshUser } from 'redux/auth/auth-operations';

// const HomePage = lazy(() => import('../pages/Home'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));

// export const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Navigate to="home"></Navigate>} />

//           <Route path="home" element={<HomePage />} />
//           <Route
//             path="register"
//             element={
//               <RestrictedRoute>
//                 <RegisterPage />
//               </RestrictedRoute>
//             }
//           />
//           <Route
//             path="login"
//             element={
//               <RestrictedRoute>
//                 <LoginPage />
//               </RestrictedRoute>
//             }
//           />
//           <Route
//             path="contacts"
//             element={
//               <PrivateRoute>
//                 <ContactsPage />
//               </PrivateRoute>
//             }
//           />
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>

//       <Toaster position="top-center" reverseOrder={false} />
//     </>
//   );
// };
