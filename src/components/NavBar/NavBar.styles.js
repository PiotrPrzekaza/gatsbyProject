import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  display: flex;
  width: 90%;
  height: 20vh;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const NavBarLogo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: black;
  }
`;

const NavBarMenu = styled.div`
  display: flex;
  width: 40%;
  font-size: 2rem;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: #eb61d4;
  }
`;

export { NavBarWrapper, NavBarLogo, NavBarMenu };
