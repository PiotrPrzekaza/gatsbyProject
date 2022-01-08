import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: flex-start;
  align-content: space-between;
  width: 90%;
  height: 25vh;
  margin: 0 auto;
`;

const FooterSocial = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 30%;
`;

const FooterLinksWrapper = styled.section`
  display: flex;
  width: 30%;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
`;
const FooterLogo = styled.div`
  font-size: 2.5rem;
  width: 100%;
  a {
    display: block;
    color: black;
    text-decoration: none;
  }
`;

const FooterCreator = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  a {
    color: black;
    text-decoration: none;
  }
`;

export {
  FooterWrapper,
  FooterSocial,
  FooterLinksWrapper,
  FooterLogo,
  FooterCreator,
};
