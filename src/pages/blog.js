import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';

const Blog = ({ data }) => {
  const posts = data.allDatoCmsPost.edges;
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <main>
          <h1>Wpisy</h1>
          {posts.map(({ node }) => (
            <div key={node.slug}>
              <a href={node.slug}>{node.title}</a>
            </div>
          ))}
        </main>
      </Layout>
    </>
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
