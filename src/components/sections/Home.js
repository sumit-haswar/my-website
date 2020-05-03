import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

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
        <Container>
          <Grid inverse>
            {/*<Art>*/}
            {/*  <Img fluid={data.art_learn.childImageSharp.fluid} />*/}
            {/*</Art>*/}
            <div>
              <p>
                Hi ! <br/>
                I live in San Francisco and work for <a rel="noreferrer noopener" style={{ color: '#8bd8ed', textDecoration: 'inherit'}} href={'https://www.minted.com'} target={'_blank'}>Minted</a> as a Software Engineer.
                <br/>
                I grew up in India and studied Computer Science at <a rel="noreferrer noopener" style={{ color: '#8bd8ed', textDecoration: 'inherit'}} href={'https://www.csulb.edu/'} target={'_blank'}>Cal. State Long Beach</a> and <a rel="noreferrer noopener" style={{ color: '#8bd8ed', textDecoration: 'inherit'}} href={'http://mu.ac.in/'} target={'_blank'}>Mumbai University</a>.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 30px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
  props.inverse &&
  `
    text-align: left;
    grid-template-columns: 3fr 1fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
  props.inverse &&
  `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Home;
