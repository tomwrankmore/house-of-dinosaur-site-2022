import React from "react";
import Header from "./Header/header";
import styled from 'styled-components'
import { colors } from "../styles/colours";

import "../styles/layout.scss";
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
      
    </SiteWrapper>
  </>
)};

export default Layout;
