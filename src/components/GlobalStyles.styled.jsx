import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { modernNormalizeCss } from 'emotion-modern-normalize';

export const GlobalStyles = css`
  ${modernNormalizeCss}
  html {
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    padding: 0;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    cursor: pointer;
    border: none;
  }
  textarea {
    resize: none;
  }
`;

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
