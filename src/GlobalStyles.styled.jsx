import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

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

export const Button = styled.button`
  max-width: fit-content;
  margin: 5px auto;
  padding: 5px;
`;

export const PhotosLink = styled(Link)`
  text-align: center;
`;

export const PhotosLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export const PhotoCard = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${({ color }) => color};
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
