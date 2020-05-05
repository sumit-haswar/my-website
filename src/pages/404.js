import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <br/>
      <h1>not found</h1>
      <p>you just hit a route that doesn&#39;t exist.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
