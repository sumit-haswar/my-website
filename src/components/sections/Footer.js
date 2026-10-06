import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';
import LinkedInIcon from '@static/icons/linkedin.svg';

const SOCIAL = [
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/sumit-haswar-77744715/',
  },
  { name: 'GitHub', icon: GithubIcon, link: 'https://github.com/sumit-haswar' },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    link: 'https://www.instagram.com/sumit_haswar',
  },
  { name: 'X', icon: TwitterIcon, link: 'https://twitter.com/blue_floyd_' },
];

const Footer = () => (
  <FooterWrapper>
    <Container>
      <FooterTop>
        <Kicker>Let’s connect</Kicker>
        <SocialIcons>
          {SOCIAL.map(({ name, icon, link }) => (
            <ExternalLink key={name} href={link} aria-label={name}>
              <img src={icon} alt="" />
            </ExternalLink>
          ))}
        </SocialIcons>
      </FooterTop>
      <FooterBottom>
        <span>© {new Date().getFullYear()} Sumit Haswar</span>
        <span>Built with care in San Francisco.</span>
      </FooterBottom>
    </Container>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  padding: 76px 0 28px;
  background: ${p => p.theme.color.primary};
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  padding-bottom: 40px;
  @media (max-width: ${p => p.theme.screen.sm}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Kicker = styled.p`
  margin: 0;
  color: ${p => p.theme.color.accent};
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  a {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(22, 35, 29, 0.18);
    border-radius: 50%;
    transition: transform 160ms ease, background 160ms ease;
  }
  a:hover {
    transform: translateY(-3px);
    background: ${p => p.theme.color.surface};
  }
  img {
    width: 18px;
    height: 18px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 24px;
  border-top: 1px solid rgba(22, 35, 29, 0.16);
  color: ${p => p.theme.color.black.light};
  font-size: 12px;
  @media (max-width: ${p => p.theme.screen.xs}) {
    flex-direction: column;
  }
`;

export default Footer;
