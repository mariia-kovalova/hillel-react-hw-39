import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, NavbarLink } from 'GlobalStyles.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo to="/" end>
          <FontAwesomeIcon icon={faUsers} /> Contacts Site
        </Logo>
        <nav>
          <NavbarLink to="/" end>
            Home
          </NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/users">Users</NavbarLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
