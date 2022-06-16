import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import gsap from "gsap";
import styled from 'styled-components';
import { HideScrollbar } from '../../lib/helpers';
import { ShowScrollbar } from '../../lib/helpers';
import { colors } from '../../styles/colours';
import { device } from '../../styles/mediaQueries';
import { FaVimeoV, FaInstagram } from "react-icons/fa";

import {
    openMenu,
    staggerReveal,
    closeMenu
  } from '../../components/animations';

  export const Menu = styled.div`
  display: none;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const MenuShadowLayer = styled.div`
  background-color: ${colors.darkGray};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`
export const MenuLayer = styled.div`
  position: relative;
  background: ${colors.darkSand};
  height: 100%;
  overflow: hidden;
`

export const ContactWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        color: white;
        font-size: clamp(1rem, -0.875rem + 3.33333vw, 8rem);
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        &:hover {
            text-decoration: underline
        };

        &.instagram {
            font-size: 4rem;
            color: white;
            display: block;
            transition: all .2s ease-in-out;
            margin-top: 1rem;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
`

const OverlayNav = ({ menuState }) => {

    const menu = useRef(null);
    const revealMenu = useRef(null);
    const revealMenuShadow = useRef(null);

    /** Initial state of clicked is null */
    useEffect(() => {
        if(menuState.clicked === false) {
            ShowScrollbar()
            // smootherState.paused(false)
            closeMenu(menu.current, revealMenu.current, revealMenuShadow.current)
        }  else if (
            menuState.clicked === true || (menuState.clicked == true && menuState.initial === null)
        ) {
            HideScrollbar()
            // smootherState.paused(true)
            openMenu(menu.current, revealMenuShadow.current, revealMenu.current)
            staggerReveal(revealMenuShadow.current, revealMenu.current)
        }
    }, [menuState.clicked, menuState.initial])

    return (
    <Menu ref={menu}>
        <MenuShadowLayer ref={revealMenuShadow} />
        <MenuLayer ref={revealMenu} className="menuLayer">
            <ContactWrapper>
               <a href="mailto:contact@contact.com">contact@contact.com</a>
               <a href="https://www.instagram.com/house.of.dinosaur/" target='_blank' className='instagram'><FaInstagram/></a>
               <ul>
                <li>
                    <Link to="/archive">Archive</Link>
                </li>
                <li>
                    <Link to="/archive">Portfolio</Link>
                </li>
            </ul>
            </ContactWrapper>
            
        </MenuLayer>
    </Menu> 
    )
}

export default OverlayNav;