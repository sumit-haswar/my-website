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
          web apis, functional programming and data retrieval systems using Python, FastAPI, Flink, Kafka, AWS Cloud Products and MS SQL.
            Most of the work I do at Zillow is related to providing new,
            <a rel="noreferrer noopener" href={'https://www.zillowgroup.com/news/how-scientists-at-zillow-are-making-your-home-shopping-journey-faster-and-more-accurate/'} target={'_blank'}> immersive and interactive home tour experiences </a>
            to our users making their home shopping journey faster and more accurate.
          </p>
          <h3>Technical Skills</h3>
          <Table>
          <table cellPadding="4" cellSpacing="4">
            <tbody>
            <tr>
              <td>
                <h4>Programming Languages</h4>
              </td>
              <td>
                Python, Java, C#, JavaScript
              </td>
            </tr>
            <tr>
              <td>
                <h4>Web Technologies</h4>
              </td>
              <td>
                GraphQL, REST, AWS, Kubernetes
              </td>
            </tr>
            <tr>
              <td>
                <h4>Other Technologies</h4>
              </td>
              <td>
                Apache Flink, Git, Docker, Kafka
              </td>
            </tr>
            <tr>
              <td>
                <h4>Databases & Storage</h4>
              </td>
              <td>
                MS SQL Server, PostgreSQL, S3, DynamoDB
              </td>
            </tr>
            </tbody>
          </table>
          </Table>

          <h3>Education</h3>
          <Table>
          <table cellPadding="4" cellSpacing="4">
            <tbody>
            <tr>
              <td><h4>MS</h4></td>
              <td>Computer Science</td>
              <td><a target={'_blank'} href={'https://www.csulb.edu/'}>California State University, Long Beach</a></td>
            </tr>
            {/*<tr>*/}
            {/*  <td colSpan={3}>Research Project: <a rel="noreferrer noopener" href={constraintModelingPdf} target={'_blank'}>Platform Agnostic Constraint Modeling using XML</a></td>*/}
            {/*</tr>*/}
            <tr>
              <td><h4>BE</h4></td>
              <td>Computer Engineering</td>
              <td><a target={'_blank'} href={'https://mu.ac.in/'}>University of Mumbai</a></td>
            </tr>
            </tbody>
          </table>
          </Table>
        </Container>
      </Section>
    )}
  />
);

const Table = styled.table`
  text-align: left;
  margin: 0 0;
  color: ${props => props.theme.color.black.light};
  
  td h4 {
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    display: inline;
  }
  
`;


export default Resume;
