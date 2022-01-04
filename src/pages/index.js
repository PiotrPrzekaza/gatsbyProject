import * as React from 'react';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import Seo from '../components/Seo/Seo';
import GlobalStyle from '../styles/GlobalStyle';

const IndexPage = () => (
  <>
    <Seo title="Strona Główna" />
    <GlobalStyle />
    <NavBar />
    <Hero />
    <Footer />
  </>
);

export default IndexPage;
