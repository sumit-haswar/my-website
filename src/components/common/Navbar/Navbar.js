import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { Link } from "gatsby"

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = [
  {
    text:'about',
    link:'/'
  },
  {
    text:'resume',
    link:'/resume/'
  },
  // {
  //   text:'work',
  //   link:'/work/'
  // },
  // {
  //   text:'bookshelf',
  //   link:'/bookshelf/'
  // }
];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  // getNavAnchorLink = item => (
  //   <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
  //     {item}
  //   </AnchorLink>
  // );

  getNavAnchorLink = item => (
    <Link to={`${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </Link>
    // <AnchorLink href={`${item.toLowerCase()}`} on  Click={this.closeMobileMenu}>
    //   {item}
    // </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.text.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem.text)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand> <a style={{ color: '#564F62', textDecoration: 'inherit'}} href="/">Sumit Haswar</a></Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
