// import { Link } from './AuthNav.styled';

// export const AuthNav = () => {
//   return (
//     <div>
//       <Link to="/register">Register</Link>
//       <Link to="/login">Log In</Link>
//     </div>
//   );
// };
import { AuthNavStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavStyled to="/register">Register</AuthNavStyled>
      <AuthNavStyled to="/login">LogIn</AuthNavStyled>
    </div>
  );
};
