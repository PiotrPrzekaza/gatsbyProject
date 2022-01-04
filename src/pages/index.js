import * as React from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const IndexPage = () => (
  <>
    <Seo title="Strona Główna" />
    <Layout>
      <Hero />
    </Layout>
  </>
);

export default IndexPage;
