import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from '@components/global';

const Home = () => (
  <main>
    <Hero>
      <Container>
        <HeroGrid>
          <IntroCard>
            <h1>Hi, I’m Sumit.</h1>
            <h2>I build applied AI systems.</h2>
            <p>
              I’m a software engineer at{' '}
              <MetaLink
                href="https://www.meta.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Meta
              </MetaLink>
              , with a background in distributed systems and platform
              engineering.
            </p>
            <Actions>
              <PrimaryLink to="/projects/">
                See my work <span>↗</span>
              </PrimaryLink>
              <PlainLink to="/about/">
                About me <span>→</span>
              </PlainLink>
            </Actions>
          </IntroCard>

          <NowCard>
            <CardLabel>Right now</CardLabel>
            <NowIcon>AI</NowIcon>
            <div>
              <h3>
                Applied AI at{' '}
                <MetaLink
                  href="https://www.meta.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Meta
                </MetaLink>
              </h3>
              <p>
                Building at the intersection of intelligent systems and
                real-world products.
              </p>
            </div>
          </NowCard>
        </HeroGrid>

        <BentoGrid>
          <ProjectCard to="/projects/">
            <CardTop>
              <CardLabel>Selected work</CardLabel>
              <span>↗</span>
            </CardTop>
            <h3>Experiments in search, data, and software systems.</h3>
            <TagRow>
              <span>Python</span>
              <span>Search</span>
              <span>Data</span>
            </TagRow>
          </ProjectCard>

          <JourneyCard to="/about/">
            <CardTop>
              <CardLabel>Journey</CardLabel>
              <span>↗</span>
            </CardTop>
            <Route aria-label="Mumbai to Vienna to Long Beach to San Francisco">
              <b>Mumbai</b>
              <i />
              <b>Vienna</b>
              <i />
              <b>Long Beach</b>
              <i />
              <b>San Francisco</b>
            </Route>
            <p>Four places that shaped how I live and work.</p>
          </JourneyCard>

          <BooksCard to="/bookshelf/">
            <CardTop>
              <CardLabel>Bookshelf</CardLabel>
              <span>↗</span>
            </CardTop>
            <BookStack aria-hidden="true">
              <i />
              <i />
              <i />
            </BookStack>
            <h3>Math, fiction, psychology, and investing.</h3>
          </BooksCard>

          <GalleryCard to="/gallery/">
            <GalleryVisual aria-hidden="true">
              <PhotoFrame
                className="one"
                src="/gallery/golden-gate-sunset-640.webp"
                alt=""
                loading="lazy"
              />
              <PhotoFrame
                className="two"
                src="/gallery/ferry-building-640.webp"
                alt=""
                loading="lazy"
              />
              <PhotoFrame
                className="three"
                src="/gallery/ocean-beach-sky-640.webp"
                alt=""
                loading="lazy"
              />
            </GalleryVisual>
            <CardTop>
              <CardLabel>Photo journal</CardLabel>
              <span>↗</span>
            </CardTop>
            <h3>Scenes collected around San Francisco and beyond.</h3>
          </GalleryCard>
        </BentoGrid>
      </Container>
    </Hero>
  </main>
);

const Hero = styled.section`
  padding: 126px 0 80px;
  min-height: 100vh;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.65fr 0.85fr;
  gap: 14px;
  margin-bottom: 14px;

  @media (max-width: ${p => p.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid rgba(22, 22, 20, 0.1);
  border-radius: 24px;
  background: ${p => p.theme.color.card};
  box-shadow: 0 8px 34px rgba(22, 22, 20, 0.045);
`;

const IntroCard = styled(Card)`
  min-height: 500px;
  padding: clamp(30px, 5vw, 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0 0 10px;
    font-size: clamp(48px, 7vw, 76px);
    line-height: 0.98;
  }

  h2 {
    max-width: 720px;
    color: ${p => p.theme.color.black.light};
    font-size: clamp(27px, 4vw, 42px);
    line-height: 1.12;
    font-weight: 500;
    letter-spacing: -0.045em;
  }

  > p {
    max-width: 610px;
    margin-top: 28px;
    font-size: 17px;
    line-height: 1.7;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 36px;
`;

const PrimaryLink = styled(Link)`
  display: inline-flex;
  gap: 12px;
  align-items: center;
  padding: 13px 18px;
  border-radius: 12px;
  color: white;
  background: ${p => p.theme.color.black.regular};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 160ms ease, background 160ms ease;

  &:hover {
    transform: translateY(-2px);
    background: ${p => p.theme.color.accent};
  }
`;

const PlainLink = styled(Link)`
  display: inline-flex;
  gap: 9px;
  color: ${p => p.theme.color.black.regular};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`;

const MetaLink = styled.a`
  color: inherit;
  text-decoration-color: ${p => p.theme.color.accent};
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
`;

const CardLabel = styled.span`
  color: ${p => p.theme.color.black.lighter};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

const NowCard = styled(Card)`
  min-height: 500px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: ${p => p.theme.color.primary};

  h3 {
    margin-bottom: 10px;
    font-size: 22px;
    letter-spacing: -0.03em;
  }
  p {
    font-size: 14px;
    line-height: 1.6;
  }
`;

const NowIcon = styled.div`
  width: 132px;
  height: 132px;
  display: grid;
  place-items: center;
  align-self: center;
  border-radius: 36px;
  color: white;
  background: ${p => p.theme.color.black.regular};
  font-size: 38px;
  font-weight: 800;
  letter-spacing: -0.08em;
  transform: rotate(-5deg);
  box-shadow: 18px 18px 0 ${p => p.theme.color.accentLight};
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;

  @media (max-width: ${p => p.theme.screen.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const BentoLink = styled(Link)`
  min-height: 250px;
  padding: 26px;
  border: 1px solid rgba(22, 22, 20, 0.1);
  border-radius: 24px;
  color: ${p => p.theme.color.black.regular};
  background: ${p => p.theme.color.card};
  text-decoration: none;
  overflow: hidden;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 42px rgba(22, 22, 20, 0.08);
  }
  h3 {
    font-size: 22px;
    line-height: 1.25;
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  > span:last-child {
    font-size: 18px;
  }
`;

const ProjectCard = styled(BentoLink)`
  grid-column: span 7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    max-width: 460px;
    font-size: 30px;
  }
  @media (max-width: ${p => p.theme.screen.md}) {
    grid-column: span 2;
  }
  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-column: span 1;
  }
`;

const TagRow = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 28px;
  span {
    padding: 7px 10px;
    border-radius: 99px;
    background: ${p => p.theme.color.white.dark};
    font-size: 11px;
    font-weight: 700;
  }
`;

const JourneyCard = styled(BentoLink)`
  grid-column: span 5;
  background: ${p => p.theme.color.accentLight};
  p {
    margin-top: 26px;
    font-size: 13px;
  }
  @media (max-width: ${p => p.theme.screen.md}) {
    grid-column: span 2;
  }
  @media (max-width: ${p => p.theme.screen.sm}) {
    grid-column: span 1;
  }
`;

const Route = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 62px;
  font-size: 11px;
  b {
    white-space: nowrap;
  }
  i {
    height: 1px;
    flex: 1;
    background: rgba(22, 22, 20, 0.28);
    position: relative;
  }
  i::after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${p => p.theme.color.accent};
  }

  @media (max-width: ${p => p.theme.screen.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    margin-top: 34px;
    font-size: 13px;

    i {
      width: 1px;
      height: 24px;
      flex: none;
      margin-left: 4px;
    }

    i::after {
      left: -3px;
      right: auto;
      top: auto;
      bottom: 0;
    }
  }
`;

const BooksCard = styled(BentoLink)`
  grid-column: span 4;
  background: #e7e3f3;
  h3 {
    margin-top: 28px;
  }
  @media (max-width: ${p => p.theme.screen.md}) {
    grid-column: span 1;
  }
`;

const BookStack = styled.div`
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
  i {
    display: block;
    height: 17px;
    border-radius: 4px;
    background: ${p => p.theme.color.black.regular};
  }
  i:nth-child(1) {
    width: 68%;
  }
  i:nth-child(2) {
    width: 82%;
    margin-left: 8%;
    background: ${p => p.theme.color.accent};
  }
  i:nth-child(3) {
    width: 73%;
    margin-left: 2%;
  }
`;

const GalleryCard = styled(BentoLink)`
  grid-column: span 8;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  background: ${p => p.theme.color.black.regular};
  color: white;
  ${CardLabel} {
    color: rgba(255, 255, 255, 0.58);
  }
  ${CardTop} {
    grid-column: 2;
    margin: 0;
    align-self: start;
  }
  h3 {
    grid-column: 2;
    align-self: end;
  }
  @media (max-width: ${p => p.theme.screen.md}) {
    grid-column: span 1;
    grid-template-columns: 1fr;
    ${CardTop}, h3 {
      grid-column: 1;
    }
  }
`;

const GalleryVisual = styled.div`
  grid-row: span 2;
  min-height: 210px;
  position: relative;
`;

const PhotoFrame = styled.img`
  width: 130px;
  height: 168px;
  position: absolute;
  border: 6px solid white;
  border-bottom-width: 28px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
  object-fit: cover;

  &.one {
    left: 10px;
    top: 20px;
    transform: rotate(-8deg);
  }
  &.two {
    left: 105px;
    top: 2px;
    transform: rotate(5deg);
  }
  &.three {
    left: 196px;
    top: 26px;
    transform: rotate(11deg);
  }
`;

export default Home;
