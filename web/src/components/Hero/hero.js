import React, {useRef} from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge';

import DinosaurLogo from "../DinosaurLogo";
import HeroWave from "../SVGComponents/heroWave";
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
    width: clamp(320px, 50vw, 1024px);
    margin-top: 10vh;
`

const StyledHeroLogo = styled(HeroLogo)` 
    position: relative;
    z-index: 10;
    clip-path: inset(0 0 52% 0);
`

const StyledCircles = styled(Circles)` 
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DinoLogoWrapper = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    visibility: hidden;
`

const WavyLine = styled.div` 
    width: 100vw;
    height: 80px;
    position: absolute;
    left: 0;
    right: 0;
    top: 150px;
    .background-image {
        width: 100%;
        min-height: 100%;
    }
`

const TiledBackground = styled.div` 
    position: absolute;
    top: -50%;
    bottom: -50%;
    left: 0;
    right: 0;
    opacity: 0.15;
    .background-image {
        width: 100%;
        min-height: 100%;
    }
`

const Hero = React.forwardRef(({addToRefs, tiledBgRef}, ref) => {

    const data = useStaticQuery(
        graphql`
          query {
            tiledMadeOfPlayImage: file(relativePath: {eq: "tiled-made-of-play-sml.png"}) {
                id
                childImageSharp {
                gatsbyImageData(
                    width: 5000,
                    quality: 50, 
                    webpOptions: {quality: 70})
                }
            }
            heroWavyLineBG: file(relativePath: {eq: "hero-wavy-line.png"}) {
                id
                childImageSharp {
                gatsbyImageData(
                    width: 5000,
                    quality: 50, 
                    webpOptions: {quality: 70})
                }
            }
          }
        `
      );

    const tiledBG = getImage(data.tiledMadeOfPlayImage);
    const heroLineBgImg = getImage(data.heroWavyLineBG);

    return (
    <StyledHero ref={ref}>
        <TiledBackground ref={tiledBgRef}>
            <BgImage image={tiledBG} className="background-image" style={{ backgroundRepeat: 'repeat', backgroundSize: '200'}}/>
        </TiledBackground>
        <WavyLine>
            <BgImage image={heroLineBgImg} className="background-image" style={{ backgroundRepeat: 'repeat-x', backgroundSize: 'contain'}} />
        </WavyLine>
        <NewHeroWrapper>
            <StyledHeroLogo />
            <DinoLogoWrapper style={{zIndex:"10"}} className='box'><DinosaurLogo fillColor="#2ea878" /></DinoLogoWrapper>
            <DinoLogoWrapper style={{zIndex:"9"}} className='box'><DinosaurLogo fillColor="#fd803b" /></DinoLogoWrapper>
            <DinoLogoWrapper style={{zIndex:"8"}} className='box'><DinosaurLogo fillColor="#fccc43" /></DinoLogoWrapper>
            <DinoLogoWrapper style={{zIndex:"7"}} className='box'><DinosaurLogo fillColor="#9bdfd0" /></DinoLogoWrapper>
            <DinoLogoWrapper style={{zIndex:"6"}} className='box'><DinosaurLogo fillColor="#4f9de6" /></DinoLogoWrapper>
        </NewHeroWrapper>
        <HeroWave fill={colors.darkDinoGreen} />
    </StyledHero>
    )
})

export default Hero; 