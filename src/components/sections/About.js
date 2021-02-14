import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container, Title, Link } from '@components/global';

const About = () => (
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
      <Section id="about">
        <Title>
          <h2 style={{ marginBottom: 10 }}>About me</h2>
        </Title>
        <Container>
          {/*<Grid inverse>*/}
            <div>
              <p>
                I am originally from the so called <a target={'_blank'} href={'https://en.wikipedia.org/wiki/Maya_(given_name)'}>maya</a>-nagri(magic-city) Mumbai.
                After completing college I worked for around 3-4 years in my hometown. I moved to US in 2013 to pursue MS in Computer Science
                at the California State University Long Beach. For me California was love at first sight.
              </p>
              <p>
                Before moving to US, I spent couple of years in Vienna working for <a rel="noreferrer noopener" href={'https://www.iaea.org/'} target={'_blank'}>IAEA </a>
                as a Software Engineer.
              </p>
              <br/>
              <p>
                I am an avid soccer fan and a <a rel="noreferrer noopener" href={'https://www.acmilan.com/en'} target={'_blank'}>Rossoneri</a> supporter.
                I spend most of my money either on Onitsuka Tiger sneakers or on <a target={'_blank'} href={'https://www.designbyhumans.com/'}>designbyhumans</a> t-shirts,
                you'll mostly find me in either or both. In my free time I play soccer, bike around SF and listen to classic rock.
              </p>
            </div>
          {/*</Grid>*/}
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

export default About;
