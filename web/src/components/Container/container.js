import React from "react";
import styled from "styled-components"
import {device} from "../../styles/mediaQueries"

const StyledContainer = styled.div` 
  max-width: 1980px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 2em;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.mediaMinSmall} {
    padding: 1.5em;
    }
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
