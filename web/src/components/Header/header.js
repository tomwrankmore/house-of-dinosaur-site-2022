import { Link } from "gatsby";
import React from "react";
import Icon from "../icon";

import BrandingIcon from "../../assets/branding-icon.svg"

import {StyledHeader, Wrapper, Branding, ToggleNavButton, Nav} from './header.styled'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <Branding>
        <Link to="/">
          <BrandingIcon />
        </Link>
      </Branding>

      <ToggleNavButton onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </ToggleNavButton>

      <Nav className = {showNav ? 'showNav' : ''}>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  </StyledHeader>
);

export default Header;
