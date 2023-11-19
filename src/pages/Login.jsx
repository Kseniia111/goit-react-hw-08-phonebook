import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';

export default function Login() {
  return (
    <Section>
      <LoginForm />
    </Section>
  );
}
// import { useDispatch } from 'react-redux';
// import { LoginForm } from 'components/LoginForm/LoginForm';
// import { logIn } from 'redux/auth/auth-operations';

// const LoginPage = () => {
//   const dispatch = useDispatch();

//   const onLogin = data => {
//     dispatch(logIn(data));
//   };

//   return (
//     <>
//       <LoginForm onData={onLogin} />
//     </>
//   );
// };

// export default LoginPage;
