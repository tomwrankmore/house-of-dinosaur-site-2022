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

const ClientContainer = styled.div` 
  max-width: 1980px;
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
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
    height: 100vh;
    position: relative;
    overflow: hidden;
    padding: 2rem;
    width: 100%;
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

const ClientSection = () => {
    
    const clientSectionRef = useRef()
    const tl = useRef()

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
            clientLogos: allSanityClientBrandLogo {
                edges {
                    node {
                        id
                        image {
                            asset {
                                gatsbyImageData(
                                    formats: AUTO, 
                                    width: 500
                                )
                            }
                            alt
                        }
                    }
                }
            }
        }
        `
      );

    const tiledBG = getImage(data.tiledMadeOfPlayImage);

    const clientLogoNodes =
    data && data.clientLogos && mapEdgesToNodes(data.clientLogos)

    useEffect(() => {
        let timeline = tl.current
        let q = gsap.utils.selector(clientSectionRef.current)
        gsap.set(q('.clientLogo'), {
            visibility: 'hidden',
            yPercent: 50,
            xPercent: 10
        })
        timeline = gsap.timeline({
            defaults: { ease: "power4.out" },
            
            scrollTrigger: {
                trigger: clientSectionRef.current,
                start: 'top 50%',
                // end: 'bottom 50%',
                // scrub: true,
                toggleActions: 'play none none reverse',
                
            }
        })
        timeline.to(q('.clientLogo'), {
            yPercent: 0,
            xPercent: 0,
            autoAlpha: 1,
            // duration: 2,
            stagger: {
              amount: 0.25,
              each: 0.1,
            },
        })
    }, [])

    return (
        <ClientContainer ref={clientSectionRef}>
            <Column>
                <h1>We work with brands!</h1>
                <p style={{maxWidth: '50%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo iusto quaerat alias tempora sit modi accusamus dolores iste laboriosam? Voluptatibus explicabo id, neque ea necessitatibus possimus itaque beatae laboriosam.</p>
            </Column>
            <Column>
                <TiledBackground>
                    <BgImage image={tiledBG} className="background-image" style={{ backgroundRepeat: 'repeat', backgroundSize: '30px'}}/>
                </TiledBackground>
                {
                    data && data.clientLogos && 
                    <ClientLogos>
                        {clientLogoNodes.map((logo, idx) => {
                            return (
                                <li key={idx} className='clientLogo'>
                                    <GatsbyImage 
                                        data-speed="auto" 
                                        image={logo.image.asset.gatsbyImageData} 
                                        alt={logo.alt}
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
                }
            </Column>
        </ClientContainer>
    )
}

export default ClientSection