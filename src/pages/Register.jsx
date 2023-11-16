import { Helmet, HelmetProvider } from 'react-helmet-async';

import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
}
// import { useAuth } from '../components/hooks';
// import { Navigate } from 'react-router-dom';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
