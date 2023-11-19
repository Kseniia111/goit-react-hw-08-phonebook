// import { useDispatch } from 'react-redux';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { register } from 'redux/auth/auth-operations';
// import { useSelector } from 'react-redux';
// import { getAuthError } from 'redux/auth/auth-selectors';

// import toast from 'react-hot-toast';

// const Register = () => {
//   const dispatch = useDispatch();
//   const { status } = useSelector(getAuthError);

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';

export default function Register() {
  return (
    <Section>
      <RegisterForm />
    </Section>
  );
}
//   const onRegister = data => {
//     console.log(data);
//     if (status === 400) {
//       toast.success('You are already authorized');
//     }
//     dispatch(register(data));
//   };

//   return (
//     <>
//       <RegisterForm onData={onRegister} />
//     </>
//   );
// };
// export default Register;
