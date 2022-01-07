import React from 'react';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';
import BlogPosts from '../components/BlogPosts/BlogPosts';

const BlogPage = () => (
  <>
    <Seo title="Blog" />
    <Layout>
      <BlogPosts />
    </Layout>
  </>
);

export default BlogPage;
