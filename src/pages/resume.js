import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Resume from '@sections/Resume'
import Footer from '@sections/Footer';

const ResumePage = () => (
  <Layout>
    <Navbar />
    <Resume />
    <Footer />
  </Layout>
);

export default ResumePage;
