import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
          <h2>About me</h2>
        </Title>
        <Container>
          <Grid inverse>
            {/*add pic here*/}
            {/*<Art>*/}
            {/*  <Img fluid={data.art_learn.childImageSharp.fluid} />*/}
            {/*</Art>*/}
            <div>
              <p>
                I am originally from the city of Mumbai in India. I moved to US in 2013 for pursuing MS in Computer Science at California State University Long Beach (Go Beach!),
                and for me California was love at first sight.
              </p>
              <p>
                Before moving to US, I spent couple of years in Vienna working for <a rel="noreferrer noopener" style={{ color: '#8bd8ed', textDecoration: 'inherit'}} href={'https://www.iaea.org/'} target={'_blank'}>IAEA</a> as a Software Engineer, and before that
                I was developing financial and logistics software in my hometown of Mumbai. I've been working full-time for more than 10
                years and I think the best aspect of programming is doing it as a team. I have been the best programmer
                in some teams and in some I've been the worst. Both experiences together taught me so much which by itself would have taught me very little.
              </p>
              <br/>
              <p>
                I am an avid soccer fan and a <a rel="noreferrer noopener" style={{ color: '#8bd8ed', textDecoration: 'inherit'}} href={'https://www.acmilan.com/en'} target={'_blank'}>Rossoneri</a> supporter. When I am not coding I play pick-up soccer, cycle around SF, play Dark Souls and listen to classic rock.
                Some of my favorite bands are Led Zeppelin, Deep Purple and Pink Floyd.
                I spend most of my money either on Onitsuka sneakers or on designbyhumans t-shirts, you'll mostly find me in either or both.
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

export default About;
