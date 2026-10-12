import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const EXPERIENCE = [
  {
    company: 'Meta',
    url: 'https://www.meta.com/',
    title: 'Software Engineer',
    period: '2025—present',
    location: 'San Francisco',
    description:
      'Working in Applied AI on agent evaluation, training-data workflows, and optimization. Previously built reliability and quality safeguards for a large-scale risk platform.',
  },
  {
    company: 'Zillow',
    url: 'https://www.zillowgroup.com/',
    title: 'Senior Software Engineer',
    period: '2021—2025',
    location: 'San Francisco',
    description:
      'Built backend systems for immersive home-tour experiences. Led a diagnostic and automation platform that reduced alert fatigue fourfold and support tickets by 87%, and created shared Python and Go observability libraries adopted across dozens of services.',
  },
  {
    company: 'Minted',
    url: 'https://www.minted.com/',
    title: 'Staff Software Engineer',
    period: '2018—2021',
    location: 'San Francisco',
    description:
      'Built customization and checkout services for a large e-commerce platform. Led a four-person team delivering a PayPal integration used by more than 30% of customers, and introduced end-to-end tracing across backend, GraphQL, and frontend systems.',
  },
  {
    company: 'Practice Fusion',
    url: 'https://www.practicefusion.com/',
    title: 'Senior Software Engineer',
    period: '2016—2018',
    location: 'San Francisco',
    description:
      'Developed healthcare APIs for patient, clinical, and billing systems serving 30,000 clinics and processing more than five million visits each month. Led interoperability work and built an ETL framework for clinical and billing data.',
  },
  {
    company: 'Intermolecular',
    title: 'Senior Software Engineer',
    period: '2015—2016',
    location: 'San Jose',
    description:
      'Built full-stack applications for scientific R&D workflow automation, including real-time data processing, experiment management, and laboratory-equipment integration.',
  },
  {
    company: 'International Atomic Energy Agency',
    url: 'https://www.iaea.org/',
    title: 'Software Engineer',
    period: 'Before 2013',
    location: 'Vienna',
    description:
      'Worked as a software engineer before moving to the United States to pursue graduate study in computer science.',
  },
];

const SKILLS = [
  [
    'Applied AI & evaluation',
    'Agent evaluation, RL training data, verifiable reward design, LLM-as-judge, trajectory analysis, code-evaluation harnesses',
  ],
  ['Languages', 'Python, Go, Java, Hack/PHP'],
  [
    'Cloud & infrastructure',
    'AWS Lambda, SQS, SNS, S3, Docker, Kubernetes, Terraform',
  ],
  [
    'Services & data',
    'REST, GraphQL, FastAPI, Kong, Apache Flink, Kafka, Redis, SQL Server, DynamoDB',
  ],
  ['Delivery', 'Git, GitLab CI, GitHub Actions, Jenkins'],
  ['Observability', 'Datadog, Prometheus'],
];

const EDUCATION = [
  {
    school: 'California State University, Long Beach',
    url: 'https://www.csulb.edu/',
    degree: 'MS, Computer Science',
    period: '2013—2015',
  },
  {
    school: 'University of Mumbai',
    url: 'https://mu.ac.in/',
    degree: 'Bachelor of Engineering, Computer Science',
    period: '2003—2007',
  },
];

const Resume = () => (
  <Section>
    <Container>
      <PageIntro>
        <Eyebrow>Résumé</Eyebrow>
        <h1>A concise view of my work.</h1>
        <p>
          Software engineer with 14+ years of experience building scalable
          systems across applied AI, developer platforms, prop-tech, commerce,
          healthcare, and scientific research.
        </p>
      </PageIntro>

      <Content>
        <ResumeSection>
          <SectionHeading>
            <span>01</span>
            <h2>Work experience</h2>
          </SectionHeading>

          <ExperienceList>
            {EXPERIENCE.map(role => (
              <Experience key={role.company}>
                <Period>{role.period}</Period>
                <Role>
                  <RoleHeader>
                    <div>
                      {role.url ? (
                        <CompanyLink
                          href={role.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {role.company} <span>↗</span>
                        </CompanyLink>
                      ) : (
                        <CompanyName>{role.company}</CompanyName>
                      )}
                      <RoleTitle>{role.title}</RoleTitle>
                    </div>
                    <Location>{role.location}</Location>
                  </RoleHeader>
                  <RoleDescription>{role.description}</RoleDescription>
                </Role>
              </Experience>
            ))}
          </ExperienceList>
        </ResumeSection>

        <ResumeSection>
          <SectionHeading>
            <span>02</span>
            <h2>Technical toolkit</h2>
          </SectionHeading>

          <SkillGrid>
            {SKILLS.map(([label, value]) => (
              <Skill key={label}>
                <strong>{label}</strong>
                <p>{value}</p>
              </Skill>
            ))}
          </SkillGrid>
        </ResumeSection>

        <ResumeSection>
          <SectionHeading>
            <span>03</span>
            <h2>Education</h2>
          </SectionHeading>

          <EducationList>
            {EDUCATION.map(item => (
              <Education key={item.school}>
                <Period>{item.period}</Period>
                <div>
                  <a href={item.url} target="_blank" rel="noreferrer noopener">
                    {item.school} <span>↗</span>
                  </a>
                  <p>{item.degree}</p>
                </div>
              </Education>
            ))}
          </EducationList>
        </ResumeSection>
      </Content>
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
  margin-bottom: 88px;

  h1 {
    font-size: clamp(44px, 6vw, 70px);
    line-height: 1.08;
  }

  > p {
    max-width: 760px;
    margin-top: 28px;
    font-size: 18px;
    line-height: 1.7;
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    margin-bottom: 64px;
  }
`;

const Content = styled.div`
  max-width: 1040px;
`;

const ResumeSection = styled.section`
  padding: 28px 0 80px;
  border-top: 1px solid rgba(22, 35, 29, 0.2);

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    padding-bottom: 64px;
  }
`;

const SectionHeading = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  margin-bottom: 20px;

  span {
    color: ${p => p.theme.color.accent};
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
  }

  h2 {
    font-size: clamp(28px, 4vw, 38px);
    line-height: 1.2;
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 8px;
  }
`;

const ExperienceList = styled.div``;

const Experience = styled.article`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  padding: 34px 0;
  border-bottom: 1px solid rgba(22, 35, 29, 0.12);

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 28px 0;
  }
`;

const Period = styled.p`
  padding-top: 5px;
  color: ${p => p.theme.color.black.lighter};
  font-size: 12px;
  line-height: 1.5;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Role = styled.div``;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;

  @media (max-width: ${p => p.theme.screen.xs}) {
    flex-direction: column;
    gap: 8px;
  }
`;

const CompanyLink = styled.a`
  color: ${p => p.theme.color.black.regular};
  font-family: ${p => p.theme.font.primary};
  font-size: 25px;
  line-height: 1.2;
  font-weight: 700;
  text-decoration: none;

  span {
    color: ${p => p.theme.color.accent};
    font-family: ${p => p.theme.font.secondary};
    font-size: 15px;
  }

  &:hover {
    color: ${p => p.theme.color.accent};
  }
`;

const CompanyName = styled.h3`
  font-size: 25px;
  line-height: 1.2;
`;

const RoleTitle = styled.p`
  margin-top: 7px;
  color: ${p => p.theme.color.accent};
  font-size: 13px;
  line-height: 1.5;
  font-weight: 700;
`;

const Location = styled.span`
  padding-top: 5px;
  color: ${p => p.theme.color.black.lighter};
  font-size: 12px;
  white-space: nowrap;
`;

const RoleDescription = styled.p`
  max-width: 760px;
  margin-top: 20px;
  font-size: 15px;
  line-height: 1.75;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 48px;
  margin-left: 212px;

  @media (max-width: ${p => p.theme.screen.md}) {
    margin-left: 0;
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid rgba(22, 35, 29, 0.12);

  strong {
    color: ${p => p.theme.color.accent};
    font-size: 13px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.7;
  }
`;

const EducationList = styled.div``;

const Education = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  padding: 28px 0;
  border-bottom: 1px solid rgba(22, 35, 29, 0.12);

  &:last-child {
    border-bottom: 0;
  }

  a {
    color: ${p => p.theme.color.black.regular};
    font-family: ${p => p.theme.font.primary};
    font-size: 20px;
    line-height: 1.3;
    font-weight: 700;
    text-decoration: none;
  }

  a span {
    color: ${p => p.theme.color.accent};
    font-family: ${p => p.theme.font.secondary};
    font-size: 13px;
  }

  a:hover {
    color: ${p => p.theme.color.accent};
  }

  div > p {
    margin-top: 8px;
    font-size: 14px;
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export default Resume;
