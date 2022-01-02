import React from 'react';
import Bio from '../components/Bio/Bio';
import NavBar from '../components/NavBar/NavBar';
import GlobalStyle from '../styles/GlobalStyle';

const About = () => (
  <>
    <GlobalStyle />
    <NavBar />
    <main>
      <Bio />
    </main>
  </>
);

export default About;
