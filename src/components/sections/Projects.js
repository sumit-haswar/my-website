import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container, Title } from '@components/global';

const Home = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 860) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 860) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 860) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="home">
        <Title>
          <h2 style={{ marginBottom: 10 }}>Projects</h2>
        </Title>
        <Container>
          <h3>stocks-infer</h3>
          <p>- coming soon</p>

          <h3>py prep</h3>
          <p>my python implementation for some of the most popular and some not so popular programming interview
          questions.</p>

          <h3>xPlora</h3>
          <p>disk based search engine with dynamic ranking algorithm, relevant ranked retrieval and google news web crawler.
          </p>
        </Container>
      </Section>
    )}
  />
);


export default Home;
