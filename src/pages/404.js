import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <main>
    <title>Nic tu nie ma</title>
    <h1>Upss! Coś poszło nie tak!</h1>
    <div>
      <p>
        Nie ma takiej strony, lub jest w budowie! Kliknij poniżej aby wrócić do
        strony głównej
      </p>
    </div>
    <div>
      <img src="" alt="" />
    </div>
    <Link to="/">Strona główna</Link>
  </main>
);

export default NotFoundPage;
