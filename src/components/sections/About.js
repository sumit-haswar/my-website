import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const About = () => (
  <Section>
    <Container>
      <PageIntro>
        <Eyebrow>About me</Eyebrow>
        <h1>Engineer by practice. Curious person by default.</h1>
      </PageIntro>

      <StoryGrid>
        <Aside>
          <Fact>
            <span>01</span>
            <strong>Mumbai</strong>
            <small>Where I grew up</small>
          </Fact>
          <Fact>
            <span>02</span>
            <strong>Vienna</strong>
            <small>A formative chapter</small>
          </Fact>
          <Fact>
            <span>03</span>
            <strong>California</strong>
            <small>Where I found home</small>
          </Fact>
        </Aside>

        <Story>
          <p className="lead">
            I’m originally from Mumbai — the city often called{' '}
            <em>Maya Nagri</em>, or the “City of Magic.” It’s where I studied,
            began my career, and learned to love the energy of ambitious,
            complicated places.
          </p>
          <p>
            After a few years working in Mumbai, I moved to Vienna to work as a
            software engineer at the{' '}
            <a
              href="https://www.iaea.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              International Atomic Energy Agency
            </a>
            . In 2013, I moved to the U.S. to pursue an MS in Computer Science
            at California State University, Long Beach. California quickly felt
            like home.
          </p>
          <p>
            Today I live in San Francisco. Away from a screen, you’ll usually
            find me playing soccer, biking around the city, listening to classic
            rock, or following{' '}
            <a
              href="https://www.acmilan.com/en"
              target="_blank"
              rel="noreferrer noopener"
            >
              AC Milan
            </a>
            . My wardrobe is mostly Onitsuka Tiger sneakers and DesignByHumans
            t-shirts — some systems don’t need changing.
          </p>
          <Quote>“Build carefully. Stay curious. Keep moving.”</Quote>
        </Story>
      </StoryGrid>
    </Container>
  </Section>
);

const PageIntro = styled.header`
  max-width: 820px;
  margin-bottom: 72px;

  h1 {
    font-size: clamp(44px, 6vw, 70px);
    line-height: 1.13;
  }
`;

const Eyebrow = styled.p`
  margin-bottom: 20px;
  color: ${props => props.theme.color.accent};
  font-size: 13px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const Aside = styled.aside`
  border-top: 1px solid rgba(22, 35, 29, 0.18);
`;

const Fact = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  padding: 22px 0;
  border-bottom: 1px solid rgba(22, 35, 29, 0.18);

  span,
  small {
    color: ${props => props.theme.color.black.lighter};
    font-size: 12px;
  }
  strong {
    font-family: ${props => props.theme.font.primary};
    font-size: 18px;
  }
  small {
    grid-column: 2;
    margin-top: 5px;
  }
`;

const Story = styled.article`
  max-width: 720px;

  p {
    margin-bottom: 26px;
    line-height: 1.8;
  }
  .lead {
    color: ${props => props.theme.color.black.regular};
    font-size: 23px;
    line-height: 1.65;
  }
  em {
    color: ${props => props.theme.color.accent};
    font-family: ${props => props.theme.font.primary};
  }
  a {
    font-weight: 600;
  }
`;

const Quote = styled.blockquote`
  margin: 56px 0 0;
  padding: 28px 0 28px 28px;
  border-left: 3px solid ${props => props.theme.color.accent};
  color: ${props => props.theme.color.black.regular};
  font-family: ${props => props.theme.font.primary};
  font-size: 26px;
  line-height: 1.5;
`;

export default About;
