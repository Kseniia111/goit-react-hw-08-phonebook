import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Header/Header';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
import { NotFoundPage } from '../pages/NotFoundPage';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home"></Navigate>} />

          <Route path="home" element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="login"
            element={
              <restrictedRoute>
                <LoginPage />
              </restrictedRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
// import React, { useEffect, lazy } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { useAuth } from './hooks';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
// import { refreshUser } from '../redux/auth/auth-operations';
// import { Container } from './App.styled';
// import { Layout } from './Layout';
// import { Loader } from './Loader/Loader';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

// function App() {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? ( // if isRefreshing is true, then render Loader, else render Container
//     <Loader /> // Loader - spinner
//   ) : (
//     <Container>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route
//             path="registration"
//             element={
//               <RestrictedRoute
//                 redirectTo="/contacts"
//                 component={<RegisterPage />}
//               />
//             }
//           />
//           <Route
//             path="login"
//             element={
//               <RestrictedRoute
//                 redirectTo="/contacts"
//                 component={<LoginPage />}
//               />
//             }
//           />
//           <Route
//             path="contacts"
//             element={
//               <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//             }
//           />
//           <Route path="*" element={<Navigate to="/" />} />{' '}
//           {/* redirect to home page */}
//         </Route>
//       </Routes>
//     </Container>
//   );
// }

// export default App;

// import { lazy, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';

// import { useAuth } from './hooks';
// import { refreshUser } from 'redux/auth/auth-operations';

// import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />

//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//           }
//         />
//         <Route path="*" element={<HomePage />} />
//       </Route>
//     </Routes>
//   );
// };
