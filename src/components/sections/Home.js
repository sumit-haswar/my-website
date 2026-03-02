import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
          {/*<Grid inverse>*/}
            <div>
              <p>
                Hi!<br/>
                I live in San Francisco and work for <a rel="noreferrer noopener" href={'https://engineering.fb.com/'} target={'_blank'}>Meta</a> as a Software Engineer.
                <br/>
                I grew up in India and studied Computer Science at <a rel="noreferrer noopener" href={'https://www.csulb.edu/'} target={'_blank'}>Cal. State Long Beach</a> and <a rel="noreferrer noopener" href={'http://mu.ac.in/'} target={'_blank'}>Mumbai University</a>.
              </p>
            </div>
          {/*</Grid>*/}
        </Container>
      </Section>
    )}
  />
);

export default Home;
