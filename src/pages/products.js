/* eslint-disable react/prop-types */

import { graphql } from 'gatsby';
import React from 'react';

const Products = ({ data }) => {
  const product = data.allDatoCmsProduct.edges;
  return (
    <div>
      <h1>Wpisy</h1>
      {product.map(({ node }) => {
        return (
          <div key={node.slug}>
            <a href={node.slug}>{node.title}</a>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query {
    allDatoCmsProduct {
      edges {
        node {
          title
          slug
          content
          img {
            url
            alt
            fluid: fixed(height: 400, width: 400) {
              height
              width
            }
          }
        }
      }
    }
  }
`;

export default Products;
