import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';
import { UserNav, StyledName } from './UserMenu.styled';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <UserNav>
      <StyledName>Hello, {name} </StyledName>
      <Button variant="contained" size="small" onClick={onLogOut} type="button">
        Log Out
      </Button>
    </UserNav>
  );
};
