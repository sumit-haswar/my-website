import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Gallery from '@sections/Gallery';
import Footer from '@sections/Footer';

const GalleryPage = () => (
  <Layout>
    <Navbar />
    <Gallery />
    <Footer />
  </Layout>
);

export default GalleryPage;
