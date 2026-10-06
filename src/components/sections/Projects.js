import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const PROJECTS = [
  {
    number: '01',
    title: 'stocks-infer',
    status: 'In development',
    description:
      'An exploration of market data, signals, and practical tools for making sense of public equities.',
    tags: ['Data', 'Finance', 'Python'],
  },
  {
    number: '02',
    title: 'py prep',
    status: 'Code collection',
    description:
      'Python implementations of popular — and a few less familiar — programming interview problems.',
    tags: ['Python', 'Algorithms', 'Learning'],
  },
  {
    number: '03',
    title: 'xPlora',
    status: 'Research project',
    description:
      'A disk-based search engine with dynamic ranking, relevant ranked retrieval, and a Google News crawler.',
    tags: ['Search', 'Ranking', 'Crawling'],
  },
];

const Projects = () => (
  <Section>
    <Container>
      <PageIntro>
        <Eyebrow>Selected work</Eyebrow>
        <h1>Projects built to learn, explore, and solve.</h1>
        <p>
          A selection of personal work spanning data, algorithms, and
          information retrieval.
        </p>
      </PageIntro>

      <ProjectList>
        {PROJECTS.map(project => (
          <Project key={project.title}>
            <ProjectNumber>{project.number}</ProjectNumber>
            <ProjectBody>
              <ProjectMeta>{project.status}</ProjectMeta>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Tags>
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </Tags>
            </ProjectBody>
          </Project>
        ))}
      </ProjectList>

      <GithubNote>
        <span>More experiments live on GitHub.</span>
        <a
          href="https://github.com/sumit-haswar"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit my profile ↗
        </a>
      </GithubNote>
    </Container>
  </Section>
);

const Eyebrow = styled.p`
  margin-bottom: 20px;
  color: ${props => props.theme.color.accent};
  font-size: 13px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const PageIntro = styled.header`
  max-width: 780px;
  margin-bottom: 72px;
  h1 {
    font-size: clamp(44px, 6vw, 70px);
    line-height: 1.13;
  }
  > p:last-child {
    max-width: 640px;
    margin-top: 24px;
  }
`;

const ProjectList = styled.div`
  border-top: 1px solid rgba(22, 35, 29, 0.18);
`;

const Project = styled.article`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 24px;
  padding: 42px 0;
  border-bottom: 1px solid rgba(22, 35, 29, 0.18);
  transition: padding 180ms ease, background 180ms ease;

  &:hover {
    padding-left: 18px;
    padding-right: 18px;
    background: ${props => props.theme.color.white.regular};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 40px 1fr;
  }
`;

const ProjectNumber = styled.span`
  color: ${props => props.theme.color.black.lighter};
  font-size: 13px;
  font-weight: 700;
`;

const ProjectBody = styled.div`
  h2 {
    margin: 7px 0 14px;
    font-size: clamp(28px, 4vw, 40px);
  }
  p {
    max-width: 700px;
  }
`;

const ProjectMeta = styled.span`
  color: ${props => props.theme.color.accent};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
  span {
    padding: 6px 10px;
    border-radius: 999px;
    background: ${props => props.theme.color.primary};
    font-size: 12px;
    font-weight: 600;
  }
`;

const GithubNote = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 56px;
  padding: 26px 30px;
  border-radius: 14px;
  background: ${props => props.theme.color.black.regular};
  color: ${props => props.theme.color.surface};
  a {
    color: ${props => props.theme.color.accentLight};
    font-weight: 700;
    text-decoration: none;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`;

export default Projects;
