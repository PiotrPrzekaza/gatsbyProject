import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400&display=swap');
 html {
    font-size: 62.5%;
    box-sizing: border-box;
    background-color:#f5f5f5;
    width: 90vw;
    height: 100vh;
    margin: 0 auto;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Montserrat','Quicksand' ,sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }
  h1, h2, h3, h4, h5, span {
    margin: 0;
  }
  button {
    padding: 0;
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 0;
  }

`;

export default GlobalStyle;
