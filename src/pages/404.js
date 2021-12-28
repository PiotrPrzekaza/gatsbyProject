import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage = () => (
  <main>
    <title>Nic tu nie ma</title>
    <h1>Upss! Coś poszło nie tak!</h1>
    <div>
      <div>
        <StaticImage src="../images/magicznaLogo.svg" />
      </div>
      <p>
        Nie ma takiej strony, lub jest w budowie! Kliknij poniżej aby wrócić do
        strony głównej
      </p>
    </div>
    <div>
      <StaticImage
        src="../images/home4.jpg"
        alt="please include an alt"
        width={{ width: 400 }}
        height={{ height: 400 }}
      />
    </div>
    <Link to="/">Strona główna</Link>
  </main>
);

export const query = graphql`
  {
    file {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default NotFoundPage;
