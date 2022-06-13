import React from "react";
import Header from "../Header/header";
import styled from 'styled-components'
import { colors } from "../../styles/colours";

import "../../styles/layout.css";
import * as styles from "./layout.module.css";

const SiteWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.darkDinoGreen};
`

const Content = styled.div` 
  flex: 1;
`

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, id }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <SiteWrapper id={id} className='siteWrapper'>
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
);

export default Layout;
