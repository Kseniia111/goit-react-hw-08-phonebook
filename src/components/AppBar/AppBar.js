import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hook/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
