import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container, Title } from '@components/global';

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
                rel="noreferrer noopener"
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
              <a
                target={'_blank'}
                rel="noreferrer noopener"
                href={'https://www.designbyhumans.com/'}
              >
                DesignByHumans
              </a>
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

export default About;
