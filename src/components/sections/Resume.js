import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const SKILLS = [
  ['Languages', 'Python, Go, Java'],
  ['Services & APIs', 'GraphQL, REST, FastAPI, Kong, AWS Lambda'],
  ['Data & infrastructure', 'Kafka, Flink, Docker, Kubernetes, Terraform'],
  ['Storage', 'DynamoDB, SQL Server, Redis, S3, SQS'],
];

const Resume = () => (
  <Section>
    <Container>
      <PageIntro>
        <Eyebrow>Experience</Eyebrow>
        <h1>Building intelligent systems that work at scale.</h1>
      </PageIntro>

      <ResumeGrid>
        <Sidebar>
          <h3>Focus</h3>
          <p>Distributed services</p>
          <p>Applied AI</p>
          <p>Data-intensive systems</p>
          <p>Developer platforms</p>
        </Sidebar>

        <Content>
          <Block>
            <SectionLabel>Now</SectionLabel>
            <Role>
              <RoleHeader>
                <div>
                  <h2>Software Engineer</h2>
                  <a
                    href="https://www.meta.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Meta ↗
                  </a>
                </div>
                <span>San Francisco</span>
              </RoleHeader>
              <p>
                I currently work in Applied AI, building intelligent systems and
                product experiences at{' '}
                <a
                  href="https://www.meta.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Meta
                </a>
                . My broader background spans distributed services,
                data-intensive applications, and developer platforms.
              </p>
            </Role>
          </Block>

          <Block>
            <SectionLabel>Previously</SectionLabel>
            <PreviousRoles>
              <a
                href="https://www.zillowgroup.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Zillow Group <span>↗</span>
              </a>
              <a
                href="https://www.minted.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Minted <span>↗</span>
              </a>
              <a
                href="https://www.iaea.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                IAEA <span>↗</span>
              </a>
            </PreviousRoles>
          </Block>

          <Block>
            <SectionLabel>Technical toolkit</SectionLabel>
            <SkillList>
              {SKILLS.map(([label, value]) => (
                <Skill key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </Skill>
              ))}
            </SkillList>
          </Block>

          <Block>
            <SectionLabel>Education</SectionLabel>
            <Education>
              <div>
                <strong>MS, Computer Science</strong>
                <a
                  href="https://www.csulb.edu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  California State University, Long Beach ↗
                </a>
              </div>
              <div>
                <strong>BE, Computer Engineering</strong>
                <a
                  href="https://mu.ac.in/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  University of Mumbai ↗
                </a>
              </div>
            </Education>
          </Block>
        </Content>
      </ResumeGrid>
    </Container>
  </Section>
);

const Eyebrow = styled.p`
  margin-bottom: 20px;
  color: ${p => p.theme.color.accent};
  font-size: 13px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const PageIntro = styled.header`
  max-width: 850px;
  margin-bottom: 80px;
  h1 {
    font-size: clamp(44px, 6vw, 70px);
    line-height: 1.13;
  }
`;

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 96px;
  @media (max-width: ${p => p.theme.screen.md}) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const Sidebar = styled.aside`
  align-self: start;
  padding: 24px;
  border-radius: 14px;
  background: ${p => p.theme.color.primary};
  h3 {
    margin-bottom: 18px;
    font-size: 16px;
  }
  p {
    margin: 5px 0;
    font-size: 13px;
    line-height: 1.6;
  }
`;

const Content = styled.div``;

const Block = styled.section`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 32px;
  padding: 0 0 56px;
  margin-bottom: 56px;
  border-bottom: 1px solid rgba(22, 35, 29, 0.18);
  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`;

const SectionLabel = styled.h3`
  color: ${p => p.theme.color.accent};
  font-family: ${p => p.theme.font.secondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Role = styled.div`
  > p {
    margin-top: 22px;
    line-height: 1.75;
  }
`;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  h2 {
    margin-bottom: 8px;
    font-size: 30px;
  }
  a {
    font-weight: 700;
    text-decoration: none;
  }
  > span {
    color: ${p => p.theme.color.black.lighter};
    font-size: 13px;
  }
  @media (max-width: ${p => p.theme.screen.xs}) {
    flex-direction: column;
  }
`;

const PreviousRoles = styled.div`
  display: grid;
  a {
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
    border-bottom: 1px solid rgba(22, 35, 29, 0.12);
    color: ${p => p.theme.color.black.regular};
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  }
  a:first-child {
    padding-top: 0;
  }
  a:hover {
    color: ${p => p.theme.color.accent};
  }
`;

const SkillList = styled.div`
  display: grid;
`;

const Skill = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(22, 35, 29, 0.12);
  strong {
    font-size: 14px;
  }
  span {
    color: ${p => p.theme.color.black.light};
    font-size: 15px;
    line-height: 1.6;
  }
  &:first-child {
    padding-top: 0;
  }
  @media (max-width: ${p => p.theme.screen.xs}) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const Education = styled.div`
  display: grid;
  gap: 28px;
  div {
    display: grid;
    gap: 7px;
  }
  strong {
    font-size: 17px;
  }
  a {
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }
`;

export default Resume;
