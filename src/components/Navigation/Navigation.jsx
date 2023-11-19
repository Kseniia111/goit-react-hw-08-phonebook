import { useAuth } from 'hook/useAuth';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/" end>
        Home
      </Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
// import { NavStyled } from './Navigation.styled';
// import { useSelector } from 'react-redux';
// //import { isAuth } from 'redux/auth/auth-selectors';
// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { NavContainer } from './Navigation.styled';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
// export const Navigation = () => {
//   const isLogin = useSelector(selectIsLoggedIn);

//   return (
//     <NavContainer>
//       <NavStyled to="/home">Нome</NavStyled>
//       {isLogin && <NavStyled to="/contacts">Contacts</NavStyled>}
//       {isLogin ? <UserMenu /> : <AuthNav />}
//     </NavContainer>
//   );
// };
