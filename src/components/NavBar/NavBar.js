import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => (
  <nav>
    <div>Logo</div>
    <div>
      <Link to="/">Strona Główna</Link>
      <Link to="/blog">Wpisy</Link>
      <Link to="/about">O Mnie</Link>
    </div>
  </nav>
);
export default NavBar;
