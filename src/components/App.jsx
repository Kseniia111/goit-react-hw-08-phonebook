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
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
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
