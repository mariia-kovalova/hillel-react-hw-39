import { Outlet } from 'react-router-dom';
import { Header, Logo, NavbarLink } from 'GlobalStyles.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const SharedLayout = () => {
  return (
    <div className="container">
      <Header>
        <Logo to="/">
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
    </div>
  );
};
