import React from 'react';
import Bio from '../components/Bio/Bio';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const AboutPage = () => (
  <>
    <Seo title="O Mnie" />
    <Layout>
      <Bio />
    </Layout>
  </>
);

export default AboutPage;
