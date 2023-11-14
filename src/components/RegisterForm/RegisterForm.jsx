import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  RegistrationForm,
  RegisterLabel,
  RegisterInput,
  RegisterSubmitButton,
  RegisterContainer,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterContainer>
      <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Username
          <RegisterInput
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <RegisterInput
            autoComplete="off"
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </RegisterLabel>
        <RegisterLabel>
          Password
          <RegisterInput
            autoComplete="off"
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </RegisterLabel>
        <RegisterSubmitButton type="submit">Register</RegisterSubmitButton>
      </RegistrationForm>
    </RegisterContainer>
  );
};
