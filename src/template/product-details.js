import React from "react";
import { graphql } from "gatsby";

const Product = ({ pageContext: { slug }, data: { product } }) => {
  return (
    <section>
      <h2>{product.title}</h2>
      <div>
        <p>{product.content}</p>
      </div>
    </section>);
};

export const query = graphql`
  query fetchProduct($slug: String) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      id
      slug
      title
      content
    }
  }
`;

export default Product;
