import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Header, Logo, NavbarLink, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
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
      </div>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
