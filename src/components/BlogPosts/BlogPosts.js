import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import {
  BlogPostsWrapper,
  BlogPostsTitle,
  BlogPostsImg,
} from './BlogPosts.styles';

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

  // eslint-disable-next-line no-console
  console.log(data);
  const posts = data.allDatoCmsPost.edges;

  return (
    <BlogPostsWrapper>
      <BlogPostsTitle>Wpisy</BlogPostsTitle>
      {posts.map(([slug, title, images]) => (
        <div key={slug}>
          <a href={slug}>{title}</a>

          <BlogPostsImg src={images.url} alt="" />
        </div>
      ))}
    </BlogPostsWrapper>
  );
};

export default BlogPosts;
