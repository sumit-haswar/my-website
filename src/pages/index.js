import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Home from '@sections/Home';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Home />
    <Footer />
  </Layout>
);

export default IndexPage;
