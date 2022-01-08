import React from 'react';
import { Link } from 'gatsby';
import {
  FooterSocial,
  FooterWrapper,
  FooterLinksWrapper,
  FooterLogo,
  FooterCreator,
} from './Footer.styles';

const Footer = () => {
  const currentYear = () => new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterLinksWrapper>
        <FooterLogo>
          <Link to="/">@magiczna_pętelka</Link>
        </FooterLogo>
        <FooterCreator>
          Povered By &copy;
          <Link to="https://devhotblog.netlify.app/author"> devHot</Link>{' '}
          {currentYear()}
        </FooterCreator>
      </FooterLinksWrapper>
      <FooterSocial>
        <div>Instagram</div>
        <div>Facebook</div>
      </FooterSocial>
    </FooterWrapper>
  );
};

export default Footer;
