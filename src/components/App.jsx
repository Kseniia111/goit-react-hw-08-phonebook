import React, { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from './hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../redux/auth/auth-operations';
import { Container } from './App.styled';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? ( // if isRefreshing is true, then render Loader, else render Container
    <Loader /> // Loader - spinner
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />{' '}
          {/* redirect to home page */}
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contactsOperations';
// import { useSelector, useDispatch } from 'react-redux';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import {
//   selectErrorContacts,
//   selectisLoadingContacts,
//   selectContacts,
// } from 'redux/Selectors';
// import { RotatingLines } from 'react-loader-spinner';
// import css from './App.module.css';

// export const App = () => {
//   const dispatch = useDispatch();
//   const contactsItems = useSelector(selectContacts);
//   const isLoading = useSelector(selectisLoadingContacts);
//   const error = useSelector(selectErrorContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       {contactsItems.length !== 0 ? (
//         <>
//           <Filter />
//           {isLoading && !error && (
//             <RotatingLines
//               strokeColor="#e15b64"
//               strokeWidth="5"
//               animationDuration="0.75"
//               width="96"
//               visible={true}
//               ariaLabel="rotating-lines-loading"
//             />
//           )}
//           <ContactList />
//         </>
//       ) : (
//         <h3>Please add your first contact</h3>
//       )}
//     </div>
//   );
// };
