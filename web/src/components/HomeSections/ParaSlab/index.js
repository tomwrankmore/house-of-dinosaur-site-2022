import React, {useEffect, useRef} from "react";
import {GatsbyImage} from "gatsby-plugin-image"
import styled from "styled-components";
import {device} from '../../../styles/mediaQueries';
import {colors} from '../../../styles/colours'
import FlexSection from "../../FlexSection";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxSlabWrapper = styled.div`
    width: 100%;
    height: 100%;

  @media ${device.mediaMinSmall} {    
    }
`

const ParallaxSlab = ({crewImage}) => {
    const ParaSlabRef = useRef()
    let tl = useRef(null)
    
    // useEffect(() => {
    //     tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ParaSlabRef.current,
    //             start: "top bottom",
    //             end: "top 50%",
    //             scrub: 0.5,
    //         }
    //     })
    
    //     tl.to(ParaSlabRef.current, {
    //         width: '50%',
    //     })
    // }, [])


    return (
        <FlexSection ref={ParaSlabRef}>
            <ParallaxSlabWrapper data-speed="0.5">
                {crewImage && (
                    <GatsbyImage 
                        image={crewImage} 
                        alt=""
                        quality="50"
                        style={{height: '100%', width: '100%'}}
                        className='crewImage'
                        imgClassName="crewImageFile"
                        layout="fixed"
                        />       
                )}
            </ParallaxSlabWrapper>
        </FlexSection>
    )
}

export default ParallaxSlab; 