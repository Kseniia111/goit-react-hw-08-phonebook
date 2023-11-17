import { NavStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/auth-selectors';
import AuthNav from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavContainer } from './Navigation.styled';

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <NavContainer>
      <NavStyled to="/home">Нome</NavStyled>
      {isLogin && <NavStyled to="/contacts">Contacts</NavStyled>}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </NavContainer>
  );
};
// import { useAuth } from '../hooks/useAuth';
// import { FaPhoneSquare } from 'react-icons/fa';
// import { Nav, LogoLink, HomeLink, ContactsLink } from './Navigation.styled';
// import { useLocation } from 'react-router';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();
//   const location = useLocation();
//   return (
//     <Nav>
//       {location.pathname === '/' ? (
//         <LogoLink>
//           <FaPhoneSquare
//             style={{
//               color: 'rgb(213 169 220)',
//               width: '24px',
//               height: '24px',
//             }}
//           />
//           PhoneBook
//         </LogoLink>
//       ) : (
//         <HomeLink to="/">Home</HomeLink>
//       )}
//       {isLoggedIn && <ContactsLink to="/contacts">Contacts</ContactsLink>}
//     </Nav>
//   );
// };
