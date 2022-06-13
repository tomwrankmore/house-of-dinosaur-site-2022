import React, {useRef} from "react";
import styled from "styled-components";
import {StyledHero} from "./hero.styled"
import DinosaurLogo from "../DinosaurLogo";
import OrangeWave from "../SvgComponents/orangeWave"
import HeroLogo from "../../assets/hero-logo-full.svg"

const NewHeroWrapper = styled.div` 
    position: relative;
    height: auto;
    width: clamp(320px, 60vw, 1024px);
`

const StyledHeroLogo = styled(HeroLogo)` 
    position: relative;
    z-index: 10;
`

const Hero = ({addToRefs, houseRef}) => {
    return (
    <StyledHero>
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