import * as React from 'react';
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import Seo from '../components/Seo/Seo';
import GlobalStyle from '../styles/GlobalStyle';

const IndexPage = () => (
  <>
    <Seo title="Strona Główna" />
    <GlobalStyle />
    <header>
      <NavBar />
    </header>
    <Hero />
  </>
);

export default IndexPage;
