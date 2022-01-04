import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer>
      <section>
        <div>Instagram</div>
        <div>Facebook</div>
      </section>
      <section>
        <div>
          <Link to="/">@magiczna_pętelka</Link>
        </div>
        <div>
          Povered By &copy;
          <Link to="https://devhotblog.netlify.app/author">devHot </Link>
          {currentYear()}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
