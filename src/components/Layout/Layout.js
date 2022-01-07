import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;
