import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ pageContext: { slug }, data: { post } }) => (
  <section>
    <h2>{post.title}</h2>
    <div>
      <p>{post.content}</p>
      {post.img.map(({ url, fluid, filename }) => (
        <img
          src={url}
          alt={slug}
          key={filename}
          width={fluid.width}
          height={fluid.height}
        />
      ))}
    </div>
  </section>
);

export const query = graphql`
  query fetchProduct($slug: String) {
    post: datoCmsPost(slug: { eq: $slug }) {
      id
      slug
      title
      content
      img {
        url
        filename
        fluid: fixed(height: 400, width: 400) {
          height
          width
        }
      }
    }
  }
`;

export default BlogPost;
