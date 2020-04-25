import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container, Title } from '@components/global';

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
            <h2>Resume</h2>
        </Title>
        <Container>
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
                GraphQL, Bottle, JAX-WS, JAX-RS, AWS<br/>
                Apache Flink, Git, Docker, Spring, Apache Kafka<br/>
                MS SQL Server, MySQL, S3, MongoDB
              </p>
            </div>
          </Grid>
          <h3>Education</h3>
          <Grid oneColumn>
            <div>
              <p>California State University, Long Beach (2015) </p>
              MS, Full-Time Program in Computer Science | GPA: 3.5
              <p>University of Mumbai, BE in Computer Science (2007)</p>
            </div>
          </Grid>
          <h3>Professional Experience</h3>
          <Grid oneColumn>
            <div>
              <p>Minted - Staff Software Engineer</p>
              Currently working as a Senior Engineer in the growth and checkout team performing design and development
              for backend architecture of company’s high-traffic e-commerce platform.
              Technologies: Python, MySQL, Kafka, GraphQL, Protocol Buffer and Docker.
              <p>Practice Fusion - Senior Software Engineer </p>
              Worked as a Back-end Engineer in products team performing design and development of REST services,
              API libraries and data retrieval services for company’s flagship web based electronic health record application.
              Technologies: C#, Java, SQL Server, AMQ and MongoDB.
              <p>Intermolecular Inc. - Senior Software Engineer </p>
              Full-Stack Developer for web applications and back-end services enabling researchers and scientists to
              create and manage experiments, design workflows, perform data analysis and manage product lifecycle.
              Technologies: Java, JavaScript, SQL Server and MongoDB.
              <p>GovernmentJobs.com - Intern Software Engineer</p>
              App development intern for key-products: governmentjobs.com and Insight at the Research and Development Department.
              Responsibilities included front-end and back-end integration, development of micro-services,
              business layer and data access layer. Technologies: MongoDB, C# and Asp.Net MVC.
              <p>International Atomic Energy Agency - Senior Software Engineer</p>
              Managed all phases of monitoring/reporting application development lifecycle along with a team of three
              developers for onshore project for United Nations. Responsibilities included coordinating Dev and QA teams,
              designing app architecture, coding and unit testing. Technologies: Asp.Net MVC, JavaScript, C#, MS SQL.
              <p>Capgemini - Software Engineer</p>
              Part of core development team for implementing an inventory distribution planning and delivery project for
              Praxair Inc. using thick client and web user interface with SOA. Responsibilities included developing proof
              of concepts, coding core business logic, service layer and UI. Technologies: C#, WPF, WCF, MVVM and MS SQL.
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
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Resume;
