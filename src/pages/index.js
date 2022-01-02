import * as React from 'react';
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import GlobalStyle from '../styles/GlobalStyle';

const IndexPage = () => (
  <>
    <GlobalStyle />
    <header>
      <NavBar />
    </header>
    <Hero />
  </>
);

export default IndexPage;
