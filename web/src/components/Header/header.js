import React, {useState, useEffect, useRef, useContext} from "react";
import { Link } from "gatsby";
import Icon from "../icon";
import { IoMenu, IoClose } from 'react-icons/io5';
import BrandingIcon from "../../assets/branding-icon.svg"
import OverlayNav from "../OverlayNav/overlay-nav"

// import { GlobalStateContext } from "../../context/GlobalContextProvider";

import {StyledHeader, Wrapper, Branding, ToggleNavButton, Nav} from './header.styled'

const Header = () => {
  // const globalState = useContext(GlobalStateContext);
  // console.log(globalState.theme)
  
  // Menu State
  const [menuState, setMenuState] = useState({
    initial: false,
    clicked: null,
    icon: <IoMenu/>
  })

  // State for disabling menu button while menu is opening
  const [disabled, setDisabled] = useState(false)

  const disableMenu = () => {
    setDisabled(!disabled);
    /** After 1200ms of disabling button, re-enable it */
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  };

  const handleMenu = () => {
    disableMenu();

    if(menuState.initial === false) {
      setMenuState({
        initial: null,
        clicked: true,
        icon: <IoClose/>
      });
    } else if(menuState.clicked === true) {
      setMenuState((prevState) => ({
        ...prevState,
        clicked: !menuState.clicked,
        icon: <IoMenu/>
      }))
    } else if(menuState.clicked === false) {
      setMenuState((prevState) => ({
        ...prevState,
        clicked: !menuState.clicked,
        icon: <IoClose/>
      }))
    }
  }
  
  return (
  <StyledHeader>
    <Wrapper>
      <Branding>
        <Link to="/">
          <BrandingIcon />
        </Link>
      </Branding>

      <ToggleNavButton 
        onClick={handleMenu}
        disabled={disabled}
      >
        {menuState.icon}
      </ToggleNavButton>

      {/* <Nav className = {showNav ? 'showNav' : ''}>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </Nav> */}
    </Wrapper>
    <OverlayNav menuState={menuState} handleMenu={handleMenu} />
  </StyledHeader>
)};

export default Header;
