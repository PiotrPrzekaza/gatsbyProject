import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';

const BlogPost = ({ pageContext: { slug }, data: { post } }) => (
  <>
    <Seo title={post.title} />
    <Layout>
      <section>
        <h2>{post.title}</h2>
        <div>
          <p>{post.content}</p>
          {post.images.map(({ filename, fluid }) => (
            <img src={fluid.src} alt={slug} key={filename} />
          ))}
        </div>
      </section>
    </Layout>
  </>
);

export const query = graphql`
  query fetchPosts($slug: String) {
    post: datoCmsPost(slug: { eq: $slug }) {
      id
      slug
      title
      content
      images {
        url
        filename
        fluid: fixed(height: 400, width: 400) {
          height
          src
          width
        }
      }
    }
  }
`;

export default BlogPost;
