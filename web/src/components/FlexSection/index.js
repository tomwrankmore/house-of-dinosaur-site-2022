import React from "react";
import styled from "styled-components";

const StyledFlexSection = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FlexSection = ({ children }) => {
  return <StyledFlexSection>{children}</StyledFlexSection>;
};

export default FlexSection;
