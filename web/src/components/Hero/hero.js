import React, {useRef} from "react";
import styled from "styled-components";
import DinosaurLogo from "../DinosaurLogo";
import OrangeWave from "../SVGComponents/orangeWave";
import HeroLogo from "../../assets/hero-logo-full.svg";
import Circles from "../../assets/blob-scene-haikei.svg";
import {device} from '../../styles/mediaQueries';
import {colors} from '../../styles/colours'

export const StyledHero = styled.section`
    background-color: ${colors.dinoOffWhite};
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;

  @media ${device.mediaMinSmall} {    
    }
`

const NewHeroWrapper = styled.div` 
    position: relative;
    height: auto;
    width: clamp(320px, 60vw, 1024px);
`

const StyledHeroLogo = styled(HeroLogo)` 
    position: relative;
    z-index: 10;
`

const StyledCircles = styled(Circles)` 
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Hero = ({addToRefs}) => {
    return (
    <StyledHero>
        {/* <StyledCircles /> */}
        <NewHeroWrapper>
            <StyledHeroLogo />
            <DinosaurLogo ref={addToRefs} zIndex="10" fillColor="#2ea878" />
            <DinosaurLogo ref={addToRefs} zIndex="9" fillColor="#fd803b" />
            <DinosaurLogo ref={addToRefs} zIndex="8" fillColor="#fccc43" />
            <DinosaurLogo ref={addToRefs} zIndex="7" fillColor="#9bdfd0" />
            <DinosaurLogo ref={addToRefs} zIndex="6" fillColor="#4f9de6" />
        </NewHeroWrapper>
        <OrangeWave />
    </StyledHero>
    )
}

export default Hero; 