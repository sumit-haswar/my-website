import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import About from '@sections/About';
import Footer from '@sections/Footer';

const ResumePage = () => (
  <Layout>
    <Navbar />
    {/*<Header />*/}
    <About />
    {/*<Brands />*/}
    {/*<Team />*/}
    {/*<Faq />*/}
    <Footer />
  </Layout>
);

export default ResumePage;
