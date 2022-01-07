import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BlogPostsWrapper, BlogPostsTitle } from './BlogPosts.styles';

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPost {
        edges {
          node {
            title
            slug
            content
            images {
              filename
              url
              alt
              fluid: fixed(height: 400, width: 400) {
                src
                height
                width
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allDatoCmsPost.edges;
  return (
    <BlogPostsWrapper>
      <BlogPostsTitle>Wpisy</BlogPostsTitle>
      {posts.map(({ node }) => (
        <div key={node.slug}>
          <a href={node.slug}>{node.title}</a>
        </div>
      ))}
    </BlogPostsWrapper>
  );
};

export default BlogPosts;
