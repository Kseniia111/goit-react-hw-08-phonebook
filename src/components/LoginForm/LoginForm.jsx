import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  LogInForm,
  LoginLabel,
  LoginInput,
  LoginSubmitButton,
  LoginContainer,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginContainer>
      <LogInForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          Email
          <LoginInput type="email" name="email" />
        </LoginLabel>
        <LoginLabel>
          Password
          <LoginInput type="password" name="password" />
        </LoginLabel>
        <LoginSubmitButton type="submit">Log In</LoginSubmitButton>
      </LogInForm>
    </LoginContainer>
  );
};
