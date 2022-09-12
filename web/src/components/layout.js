import React from "react";
import Header from "./Header/header";

import "../styles/layout.scss";

const Layout = ({ children, siteTitle, id }) => {
  return (
  <>
    {/* <Header siteTitle={siteTitle} /> */}
    <div className='siteWrapper'>
      <div style={{flex: 1}}>{children}</div>
    </div>
  </>
)};

export default Layout;
