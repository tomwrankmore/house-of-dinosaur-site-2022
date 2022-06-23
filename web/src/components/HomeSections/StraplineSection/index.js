import React from "react";
import OrangeSquiggle from '../../../assets/squiggles/squiggles-2-orange.svg'
import MadeOfPlayLogo from '../../../assets/made-of-play-logo-white.svg'

import styled from "styled-components";
import { colors } from "../../../styles/colours";

const StyledSectionStrapline = styled.div` 
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-color: ${colors.darkDinoGreen};
    transform: translateY(-1px);
`

const StyledStraplineWrapper = styled.div` 
    position: relative;
    /* background-color: #ffffff5c; */
    padding: 0rem 2rem;
    /* border-radius: 1rem;
    box-shadow: 10px 10px 0px 0px ${colors.dinoAqua};
    border: solid 0.5rem ${colors.dinoAqua}; */
    max-width: 65vw;
    width: 100%;
`

const StraplineText = styled.h1` 
    color: ${colors.dinoSnow};
    font-size: clamp(1.5rem, 2.5vw, 4rem); 
    text-align: center;
    font-family: "Syne Bold";
`

const TiledBackground = styled.div` 
    position: absolute;
    top: -50%;
    bottom: -50%;
    left: 0;
    right: 0;
    opacity: 0.25;
    .background-image {
        width: 100%;
        min-height: 100%;
    }
`

const StrapSquiggle = styled.div` 
    width: 100%;
    height: 20px;
`

const MadeOfPlayLogoWrapper = styled.div` 
    width: 100%;
    height: 80px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .graphic {
        width: 100%;
        max-width: clamp(320px, 20vw, 800px); 
    }
`

const StraplineSection = ({straplineRef, strapRef}) => {
    return ( 
        <StyledSectionStrapline>
            <StyledStraplineWrapper ref={strapRef}>
            <StrapSquiggle>
                <OrangeSquiggle />
            </StrapSquiggle>
                <StraplineText ref={straplineRef}>We engineer story driven parties and captivating activations that make the audience the star of the show.</StraplineText>
            <StrapSquiggle>
                <OrangeSquiggle />
            </StrapSquiggle>
            </StyledStraplineWrapper>
            <MadeOfPlayLogoWrapper>
                <MadeOfPlayLogo className="graphic"/>
            </MadeOfPlayLogoWrapper>
        </StyledSectionStrapline>
    )
}

export default StraplineSection; 