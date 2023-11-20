import { useDispatch } from 'react-redux';
import { Button, Input, Label } from './LoginForm.styled';
import { logIn } from 'redux/auth/auth-operations';

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
    <div>
      <form onSubmit={handleSubmit}>
        <Label>
          Email:
          <Input name="email" type="email" />
        </Label>
        <Label>
          Password:
          <Input name="password" type="password" />
        </Label>
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
};
