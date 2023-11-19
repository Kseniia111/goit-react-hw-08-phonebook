import { useDispatch } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { register } from 'redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/auth-selectors';

import toast from 'react-hot-toast';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onRegister = data => {
    console.log(data);
    if (status === 400) {
      toast.success('You are already authorized');
    }
    dispatch(register(data));
  };

  return (
    <>
      <RegisterForm onData={onRegister} />
    </>
  );
};

export default RegisterPage;
