import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container, Title } from '@components/global';

import constraintModelingPdf from '@static/files/Constraint-Modeling-Xml.pdf';

// Technical Skills
// Education
// Work Experience
// Research Projects

const Resume = () => (
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
            <h2 style={{ marginBottom: 10 }}>Resume</h2>
        </Title>
        <Container>
          <p>
          I develop software at&nbsp;
             <del><a rel="noreferrer noopener" href={'https://www.practicefusion.com'} target={'_blank'}>Practice-Fusion</a></del>&nbsp;
             <del><a rel="noreferrer noopener" href={'https://www.minted.com'} target={'_blank'}>Minted</a></del>&nbsp;
             <a rel="noreferrer noopener" href={'https://www.zillowgroup.com/'} target={'_blank'}>Zillow Group</a> on distributed services,
          web apis, functional programming and data retrieval systems.
          </p>
          <h3>Technical Skills</h3>
          <Grid inverse>
            <div>
              <p>
                  Programming Languages:<br/>
                  Web Technologies:<br/>
                  Other Technologies:<br/>
                  Databases & Storage:
              </p>
            </div>
            <div>
              <p>
                Python, Java, C#, JavaScript<br/>
                GraphQL, REST, AWS<br/>
                Apache Flink, Git, Docker, Kafka<br/>
                MS SQL Server, MySQL, PostgreSQL, S3, MongoDB
              </p>
            </div>
          </Grid>
          <h3>Education</h3>
          <Grid oneColumn>
            <div>
              <p>California State University, Long Beach</p>
              <p>&ensp; MS, Full-Time Program in Computer Science</p>
              <p>&ensp; Research Project: <a rel="noreferrer noopener" href={constraintModelingPdf} target={'_blank'}>Platform Agnostic Constraint Modeling using XML</a></p>
              <br/>
              <p>University of Mumbai, Bachelor of Engineering in Computer Science</p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 0px;
  text-align: left;
  align-items: left;
  justify-items: left;
  margin: 0px 0;

  ${props =>
  props.inverse &&
  `
    text-align: left;
    grid-template-columns: 1fr 3fr;
  `}

  ${props => props.oneColumn &&
  `
    text-align: left;
    grid-template-columns: 3fr 1fr;
  `}

  h2 {
    margin-bottom: 16px;
  }
  
  h3 {
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
  // margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Resume;
