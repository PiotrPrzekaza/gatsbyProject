import React from 'react';
import { HeroWrapper, HeroImg } from './Hero.styles';

const Hero = () => {
  const image =
    'https://www.datocms-assets.com/59244/1639896221-szydelka.jpg?auto=format';
  return (
    <HeroWrapper>
      <section>
        <h1>Magiczna petelka</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          perferendis quae cum molestiae similique sequi perspiciatis, aperiam
          doloribus vitae qui possimus quaerat quibusdam ipsum dolorem fugiat
          reiciendis! Accusantium, voluptate velit.
        </p>
      </section>
      <section>
        <div>
          <HeroImg src={image} alt="hero img" />
        </div>
      </section>
    </HeroWrapper>
  );
};

export default Hero;
