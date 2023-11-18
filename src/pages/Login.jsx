import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { logIn } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(logIn(data));
  };

  return (
    <>
      <LoginForm onData={onLogin} />
    </>
  );
};

export default LoginPage;

// import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { LoginForm } from '../components/LoginForm/LoginForm';

// const LoginPage = () => {
//   return (
//     <HelmetProvider>
//       <div>
//         <Helmet>
//           <title>Login</title>
//         </Helmet>
//         <LoginForm />
//       </div>
//     </HelmetProvider>
//   );
// };
// export default LoginPage;
