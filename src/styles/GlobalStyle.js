import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400&display=swap');
 html {
    font-size: 62.5%;
    box-sizing: border-box;
    background-color:#f5f5f5;
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
:root{
  background-image: linear-gradient(to right top, #60a8bc, #41b8c1, #2fc7b8, #48d4a4, #76de87, #99d765, #bace47, #dbc130, #eca427, #f68532, #f96545, #f2445b);
  background-image: linear-gradient(to bottom, #5ae7e7, #40d7fc, #67c3ff, #9babf8, #c490d7, #d383c2, #dc77a9, #e06d8e, #e46887, #e8637f, #eb5e76, #ee5a6d);
  background-image: linear-gradient(to right top, #fb52b2, #c984f6, #75acff, #00c8ff, #00dbf6, #52ded3, #88ddb2, #b5d99c, #d3ca8c, #e7bb8c, #f0ad9a, #eba5ae);
}
`;

export default GlobalStyle;
