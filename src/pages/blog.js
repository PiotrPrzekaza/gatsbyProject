import { graphql } from 'gatsby';
import React from 'react';

const Blog = ({ data }) => {
  const posts = data.allDatoCmsPost.edges;
  return (
    <div>
      <h1>Wpisy</h1>
      {posts.map(({ node }) => (
        <div key={node.slug}>
          <a href={node.slug}>{node.title}</a>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    allDatoCmsPost {
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

export default Blog;
