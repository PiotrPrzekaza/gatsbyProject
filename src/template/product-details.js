/* eslint-disable no-unused-vars */

import React from 'react';
import { graphql } from 'gatsby';

const Product = ({ pageContext: { slug }, data: { product } }) => {
  return (
    <section>
      <h2>{product.title}</h2>
      <div>
        <p>{product.content}</p>
        {product.img.map(({ url, alt, fluid, filename }) => (
          <img
            src={url}
            alt={alt}
            key={filename}
            width={fluid.width}
            height={fluid.height}
          />
        ))}
      </div>
    </section>
  );
};

export const query = graphql`
  query fetchProduct($slug: String) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      id
      slug
      title
      content
      img {
        url
        alt
        filename
        fluid: fixed(height: 400, width: 400) {
          height
          width
        }
      }
    }
  }
`;

export default Product;
