import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import gsap from "gsap";
import { HideScrollbar } from '../../lib/helpers';
import { ShowScrollbar } from '../../lib/helpers';
import { FaVimeoV, FaInstagram } from "react-icons/fa";
import { Menu, MenuShadowLayer, MenuLayer, ContactWrapper, NavList, ContactButton } from './overlay-nav.styled'

import {
    openMenu,
    staggerReveal,
    closeMenu,
    revealNavLinks
  } from '../../components/animations';

const OverlayNav = ({ menuState }) => {

    const menu = useRef(null);
    const revealMenu = useRef(null);
    const revealMenuShadow = useRef(null);
    let q = gsap.utils.selector(menu);

    const links = q('.navLink')
    console.log('links: ', links)

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
            // revealNavLinks(links)
        }
    }, [menuState.clicked, menuState.initial])

    return (
    <Menu ref={menu}>
        <MenuShadowLayer ref={revealMenuShadow} />
        <MenuLayer ref={revealMenu} className="menuLayer">
            <ContactWrapper>
                <NavList>
                    <li className='navLink'>
                        <Link to="/archive">Archive</Link>
                    </li>
                    <li className='navLink'>
                        <Link to="/archive">Portfolio</Link>
                    </li>
                    <li className='navLink'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </NavList>
               <ContactButton href="mailto:contact@contact.com">hello@houseofdinosaur.com</ContactButton>
               <a href="https://www.instagram.com/house.of.dinosaur/" target='_blank' className='instagram'><FaInstagram/></a>
            </ContactWrapper>
        </MenuLayer>
    </Menu> 
    )
}

export default OverlayNav;