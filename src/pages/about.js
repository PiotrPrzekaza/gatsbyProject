import React from 'react';
import Bio from '../components/Bio/Bio';
import NavBar from '../components/NavBar/NavBar';
import Seo from '../components/Seo/Seo';
import GlobalStyle from '../styles/GlobalStyle';

const About = () => (
  <>
    <GlobalStyle />
    <Seo title="O mnie" />
    <header>
      <NavBar />
    </header>
    <main>
      <Bio />
    </main>
  </>
);

export default About;
