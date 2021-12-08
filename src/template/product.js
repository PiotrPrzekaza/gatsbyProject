import React from "react";
import { graphql } from "gatsby";

const Product = ({ slug }) => {
  return <div></div>;
};

export const query = graphql`
  query fetchProduct($slug: String) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      id
      slug
      title
      content
      img {
        size
      }
      link
    }
  }
`;

export default Product;
