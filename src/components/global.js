import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1040px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1040px !important;
  `};
`;

export const Section = styled.section`
  padding: 128px 0 80px;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 112px 0 72px;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;

export const Title = styled.div`
  max-width: 1040px;
  margin: 0 auto 48px;
  padding: 0 16px;
  text-align: left;

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;
