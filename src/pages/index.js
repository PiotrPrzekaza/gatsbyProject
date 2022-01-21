import * as React from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Strona Główna" />
    <Hero />
  </Layout>
);

export default IndexPage;
