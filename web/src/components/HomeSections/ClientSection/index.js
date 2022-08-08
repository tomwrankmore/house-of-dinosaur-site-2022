import React, {useRef, useEffect} from "react";
import { graphql, useStaticQuery } from 'gatsby';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge';
import { mapEdgesToNodes } from "../../../lib/helpers";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import styled from "styled-components";
import { colors } from "../../../styles/colours";
import { device } from '../../../styles/mediaQueries';
import { paragraph, responsiveTitle1, responsiveTitle3 } from "../../../components/typography.module.css";

const ClientContainer = styled.div` 
  max-width: 1980px;
  width: 100%;
  height: clamp(650px, 85vh, 760px);
  padding: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.dinoOffWhite};

  @media ${device.mediaMinLarge} {
    flex-direction: row;
  }
`

const Column = styled.div` 
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    padding: 2rem;
    width: 100%;
    height: 100%;
`
const TiledBackground = styled.div` 
    position: absolute;
    top: -25%;
    bottom: -25%;
    left: -25%;
    right: -25%;
    opacity: 0.075;
    transform: scale(1.2) rotate(-10deg);
    .background-image {
        width: 100%;
        min-height: 100%;
    }
`

const ClientLogos = styled.ul` 
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr) );
    margin: 0;
    padding: 0;
    height: 80%;
    list-style: none;
    @media ${device.mediaMinLarge} {    
        flex-direction: row;
    }

    li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .clientLogoImg {
            max-width: 200px;
        }
    }
`

const ClientScroller = styled.div`
    width: fit-content;
    height: 150px;
    /* background-color: hotpink; */
    display: flex;
    overflow: hidden;
`

const ClientBlock = styled.ul` 
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 150vw;

    li {
        padding: 0 2rem;
    }
`

const ClientSection = React.forwardRef(({clientData1}, ref) => {

    const data = useStaticQuery(
        graphql`
          query {
            tiledMadeOfPlayImage: file(relativePath: {eq: "hod-tiled.png"}) {
                id
                childImageSharp {
                gatsbyImageData(
                    width: 5000,
                    quality: 50, 
                    webpOptions: {quality: 70}
                    )
                }
            }
        }
        `
      );

    const tiledBG = getImage(data.tiledMadeOfPlayImage);

    return (
        <div ref={ref}>
            <ClientContainer>
                <Column>
                    <h1 className={responsiveTitle1}>Brand Partnerships</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo iusto quaerat alias tempora sit modi accusamus dolores iste laboriosam? Voluptatibus explicabo id, neque ea necessitatibus possimus itaque beatae laboriosam.</p>
                </Column>
                <Column>
                    <TiledBackground>
                        <BgImage image={tiledBG} className="background-image" style={{ backgroundRepeat: 'repeat', backgroundSize: '30px'}}/>
                    </TiledBackground>
                        <ClientLogos>
                            {clientData1.map((logo, idx) => {
                                return (
                                    <li key={idx} className='clientLogo'>
                                        <GatsbyImage 
                                            image={logo.image.asset.gatsbyImageData} 
                                            alt="Logo"
                                            quality="50"
                                            style={{height: '100%', width: '100%'}}
                                            className='clientLogoImg'
                                            imgClassName="clientLogoImgFile"
                                            layout="fixed"
                                            objectFit="contain"
                                            placeholder="blurred"
                                            
                                        />
                                    </li>
                                )
                            })}
                        </ClientLogos>
                </Column>
            </ClientContainer>
            <ClientScroller className="clientScroller">
                <ClientBlock className="clientBlock">
                    {clientData1.map((logo, idx) => {
                        return (
                            <li key={idx} className='clientLogo'>
                                <GatsbyImage 
                                    image={logo.image.asset.gatsbyImageData} 
                                    alt="Logo"
                                    quality="50"
                                    style={{height: '100%', width: '100%'}}
                                    className='clientLogoImg'
                                    imgClassName="clientLogoImgFile"
                                    layout="fixed"
                                    objectFit="contain"
                                    placeholder="blurred"
                                    
                                />
                            </li>
                        )
                    })}
                </ClientBlock>
                <ClientBlock className="clientBlock">
                    {clientData1.map((logo, idx) => {
                        return (
                            <li key={idx} className='clientLogo'>
                                <GatsbyImage 
                                    image={logo.image.asset.gatsbyImageData} 
                                    alt="Logo"
                                    quality="50"
                                    style={{height: '100%', width: '100%'}}
                                    className='clientLogoImg'
                                    imgClassName="clientLogoImgFile"
                                    layout="fixed"
                                    objectFit="contain"
                                    placeholder="blurred"
                                    
                                />
                            </li>
                        )
                    })}
                </ClientBlock>
                <ClientBlock className="clientBlock">
                    {clientData1.map((logo, idx) => {
                        return (
                            <li key={idx} className='clientLogo'>
                                <GatsbyImage 
                                    image={logo.image.asset.gatsbyImageData} 
                                    alt="Logo"
                                    quality="50"
                                    style={{height: '100%', width: '100%'}}
                                    className='clientLogoImg'
                                    imgClassName="clientLogoImgFile"
                                    layout="fixed"
                                    objectFit="contain"
                                    placeholder="blurred"
                                    
                                />
                            </li>
                        )
                    })}
                </ClientBlock>
            </ClientScroller>
        </div>
        
    )
})

export default ClientSection