import React from 'react';
import { graphql } from 'gatsby';
import NavBar from '../components/NavBar/NavBar';
import Seo from '../components/Seo/Seo';
import GlobalStyle from '../styles/GlobalStyle';

const Blog = ({ data }) => {
  const posts = data.allDatoCmsPost.edges;
  return (
    <>
      <Seo title="Blog" />
      <GlobalStyle />
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Wpisy</h1>
        {posts.map(({ node }) => (
          <div key={node.slug}>
            <a href={node.slug}>{node.title}</a>
          </div>
        ))}
      </main>
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
