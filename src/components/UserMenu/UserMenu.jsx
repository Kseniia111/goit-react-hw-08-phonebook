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
// import Button from '@mui/material/Button';
// import { useSelector, useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/auth-operations';
// import { selectUser } from 'redux/auth/auth-selectors';
// import { UserNav, StyledName } from './UserMenu.styled';

// export const UserMenu = () => {
//   const { name } = useSelector(selectUser);
//   const dispatch = useDispatch();

//   const onLogOut = () => dispatch(logOut());

//   return (
//     <UserNav>
//       <StyledName>Hello, {name} </StyledName>
//       <Button variant="contained" size="small" onClick={onLogOut} type="button">
//         Log Out
//       </Button>
//     </UserNav>
//   );
//};
