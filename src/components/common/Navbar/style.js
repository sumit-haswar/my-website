import styled from 'styled-components';

import { Container } from '@components/global';

export const Nav = styled.nav`
  padding: 14px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding: 8px 12px;
  border: 1px solid rgba(22, 22, 20, 0.1);
  border-radius: 18px;
  background: rgba(252, 252, 248, 0.9);
  box-shadow: 0 8px 30px rgba(22, 22, 20, 0.06);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`;

export const NavItem = styled.li`
  margin-left: 22px;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};

  a {
    text-decoration: none;
    opacity: 0.72;
    color: ${props => props.theme.color.black.regular};
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.01em;
    transition: opacity 160ms ease, color 160ms ease;

    &:hover {
      opacity: 1;
      color: ${props => props.theme.color.accent};
    }
  }

  a.active {
    opacity: 1;
    color: ${props => props.theme.color.accent};
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 8px auto 0;
  background: ${props => props.theme.color.card};
  border-top: 1px solid rgba(22, 35, 29, 0.08);
  padding-bottom: 20px;
`;

export const Brand = styled.div`
  font-family: ${props => props.theme.font.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;

  a {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 6px;
    color: ${props => props.theme.color.black.regular};
    text-decoration: none;

    &::after {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props => props.theme.color.accent};
    }
  }
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
