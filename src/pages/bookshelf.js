import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Bookshelf from '../components/sections/Bookshelf';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Bookshelf />
    <Footer />
  </Layout>
);

export default IndexPage;
