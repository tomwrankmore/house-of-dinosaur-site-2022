import React from "react";
import OrangeSquiggle from "../../../assets/squiggles/squiggles-2-orange.svg"
import MadeOfPlayLogo from "../../../assets/made-of-play-logo-white.svg"

import styled from "styled-components";
import { colors } from "../../../styles/colours";
import {device} from "../../../styles/mediaQueries"


const StyledSectionStrapline = styled.div` 
    width: 100vw;
    height: clamp(75vh, 100vh, 1024px);
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-color: ${colors.darkDinoGreen};
    transform: translateY(-1px);
    padding-top: 5vh;
`

const StyledStraplineWrapper = styled.div` 
    position: relative;
    padding: 0rem 2rem;
    max-width: 100vw;
    width: 100%;
    @media ${device.mediaMinMedium} {  
        max-width: 75vw;
    }
`

const StraplineText = styled.h1` 
    color: ${colors.dinoSnow};
    font-size: 1.875rem;  
    font-weight: bold;
    
    @media ${device.mediaMinMedium} {  
        font-size: 2.875rem;  
    }
    text-align: center;
    /* font-family: "Syne Bold"; */
`

const StrapSquiggle = styled.div` 
    width: 100%;
    height: 20px;
    @media ${device.mediaMinMedium} {  
        height: 30px;
    }
    @media ${device.mediaMinLarge} {  
        height: 40px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        height: 100%;
    }
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

const StraplineSection = React.forwardRef((props, ref) => {
    return ( 
        <StyledSectionStrapline ref={ref}>
            <StyledStraplineWrapper>
                <StrapSquiggle>
                    <OrangeSquiggle />
                </StrapSquiggle>
                    <StraplineText className="straplineText">We engineer story driven parties and captivating activations that make the audience the star of the show.</StraplineText>
                <StrapSquiggle>
                    <OrangeSquiggle />
                </StrapSquiggle>
            </StyledStraplineWrapper>
            <MadeOfPlayLogoWrapper>
                <MadeOfPlayLogo className="graphic"/>
            </MadeOfPlayLogoWrapper>
        </StyledSectionStrapline>
    )
})

export default StraplineSection; 