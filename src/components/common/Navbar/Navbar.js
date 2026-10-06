import React, { Component } from 'react';
import { Link } from 'gatsby';

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

import MenuIcon from '@static/icons/menu.svg';

const NAV_ITEMS = [
  { text: 'about', link: '/about/' },
  {
    text: 'resume',
    link: '/resume/',
  },
  {
    text: 'projects',
    link: '/projects/',
  },
  {
    text: 'bookshelf',
    link: '/bookshelf/',
  },
  {
    text: 'gallery',
    link: '/gallery/',
  },
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

  getNavAnchorLink = item => (
    <Link
      to={item.link}
      activeClassName="active"
      onClick={this.closeMobileMenu}
    >
      {item.text}
    </Link>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <ul>
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem.text}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </ul>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>
            <Link to="/" onClick={this.closeMobileMenu}>
              Sumit Haswar
            </Link>
          </Brand>
          <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              aria-label={
                mobileMenuOpen ? 'Close navigation' : 'Open navigation'
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              style={{ color: '#161614', padding: 8 }}
            >
              <img src={MenuIcon} alt="" width="24" height="24" />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu id="mobile-navigation">
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
