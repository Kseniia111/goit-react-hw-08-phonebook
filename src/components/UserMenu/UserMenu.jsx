import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../hooks/useAuth';
import { Wrapper, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOutBtn>
    </Wrapper>
  );
};
