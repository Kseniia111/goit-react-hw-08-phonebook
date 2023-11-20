import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Button, Input, Label } from './RegisterForm.styled';

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
    <div>
      <form onSubmit={handleSubmit}>
        <Label>
          User name:
          <Input name="name" type="text" />
        </Label>
        <Label>
          Email:
          <Input name="email" type="email" />
        </Label>
        <Label>
          Password:
          <Input name="password" type="password" />
        </Label>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
