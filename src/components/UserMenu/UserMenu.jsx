import { useAuth } from 'hook/useAuth';
import { Button, UserName, Wrapper } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}!</UserName>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  );
};
