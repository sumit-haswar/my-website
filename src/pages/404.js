import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Navbar />
    <NotFound>
      <Container>
        <span>404</span>
        <h1>This page wandered off.</h1>
        <p>The address may have changed, or the page may no longer exist.</p>
        <Link to="/">Back to the homepage →</Link>
      </Container>
    </NotFound>
    <Footer />
  </Layout>
);

const NotFound = styled.main`
  min-height: 72vh;
  padding: 190px 0 100px;

  span {
    color: ${props => props.theme.color.accent};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.14em;
  }

  h1 {
    max-width: 760px;
    margin: 18px 0 24px;
    font-size: clamp(48px, 7vw, 78px);
    line-height: 1.12;
  }

  p {
    margin-bottom: 34px;
  }

  a {
    color: ${props => props.theme.color.black.regular};
    font-weight: 700;
    text-decoration: none;
  }
`;

export default NotFoundPage;
