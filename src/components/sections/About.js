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
              I'm originally from Mumbai, affectionately known as{' '}
              <a
                target={'_blank'}
                href={'https://en.wikipedia.org/wiki/Maya_(given_name)'}
              >
                Maya
              </a>
              -Nagri—the "City of Magic." After completing my college education,
              I worked in my hometown for about 3–4 years. Before moving to the
              U.S., I also spent a couple of years in Vienna, working as a
              Software Engineer at the International Atomic Energy Agency (
              <a
                rel="noreferrer noopener"
                href={'https://www.iaea.org/'}
                target={'_blank'}
              >
                IAEA
              </a>
              ).
            </p>
            <p>
              In 2013, I moved to the U.S. to pursue an MS in Computer Science
              at California State University, Long Beach—and it was love at
              first sight with California.
            </p>
            <p>
              I'm a passionate soccer fan and a proud <a
              rel="noreferrer noopener"
              href={'https://www.acmilan.com/en'}
              target={'_blank'}
            >
              AC Milan
            </a>{' '} supporter. Most
              of my wardrobe is a mix of Onitsuka Tiger sneakers and {' '}
              <a target={'_blank'} href={'https://www.designbyhumans.com/'}>DesignByHumans</a>
              {' '}t-shirts—you'll rarely catch
                me in anything else.
                In my free time, I enjoy playing soccer, biking around San
              Francisco, and listening to classic rock.
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
