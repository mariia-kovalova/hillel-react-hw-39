import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid gray;

  > nav {
    display: flex;
  }
`;

export const Logo = styled(Link)`
  font-weight: 700;
  margin: 0;
`;

export const NavbarLink = styled(NavLink)`
  padding: 8px 32px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: white;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
`;
