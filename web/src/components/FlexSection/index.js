import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";


const StyledFlexSection = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
`

const FlexSection = React.forwardRef(({ children, bg, maxHeight, innerBorder }, ref) => {
  return <StyledFlexSection style={{backgroundColor: bg, maxHeight: maxHeight, boxShadow: innerBorder}} ref={ref}>{children}</StyledFlexSection>;
});

export default FlexSection;
