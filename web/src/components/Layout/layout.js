import React, {useEffect, useState} from "react";
import Header from "../Header/header";
import styled from 'styled-components'
import { colors } from "../../styles/colours";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import "../../styles/layout.scss";
import * as styles from "./layout.module.css";

const SiteWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: ${colors.darkDinoGreen};
`

const Content = styled.div` 
  flex: 1;
`

const Layout = ({ children, siteTitle, id }) => {
  return (
  <>
    <Header siteTitle={siteTitle} />
    <SiteWrapper className='siteWrapper'>
      <Content>{children}</Content>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.siteInfo}>
            © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </footer>
    </SiteWrapper>
  </>
)};

export default Layout;
