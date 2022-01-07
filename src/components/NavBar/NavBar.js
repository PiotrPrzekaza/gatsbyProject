import React from 'react';
import { Link } from 'gatsby';
import { NavBarWrapper, NavBarLogo, NavBarMenu } from './NavBar.styles';

const NavBar = () => (
  <NavBarWrapper>
    <NavBarLogo>
      <Link to="/">magiczna_pętelka</Link>
    </NavBarLogo>
    <NavBarMenu>
      <Link to="/">Strona Główna</Link>
      <Link to="/blogPage">Wpisy</Link>
      <Link to="/aboutPage">O Mnie</Link>
    </NavBarMenu>
  </NavBarWrapper>
);
export default NavBar;
