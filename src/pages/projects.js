import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Projects from '../components/sections/Projects';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Projects />
    <Footer />
  </Layout>
);

export default IndexPage;
