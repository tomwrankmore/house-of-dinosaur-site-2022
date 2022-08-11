import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import { BgImage } from "gbimage-bridge";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import styled from "styled-components";
import { colors } from "../../../styles/colours";
import { paragraph, responsiveTitle1, responsiveTitle3 } from "../../../components/typography.module.css";

const HouseDivider = styled.div` 
    position: relative;
    width: calc(100vw - 2rem);
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 2rem);
    /* height: clamp(600px, 85vh, 960px); */
    margin: 0 auto;
    background-color: ${colors.dinoSunshine};
    margin-bottom: 1rem;

    .dividerBgImg {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 2;
    }
`

const TitleContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`

const DividerTitle = styled.div` 
    color: ${colors.dinoSnow};
    font-family: "Syne Bold";
    font-size: 4rem;
    font-weight: bold;

    &.left {
        margin-right: 1rem;
    }

    &.right {
        display: flex;
        flex-direction: column;
        height: 4rem;
        
        span {
            display: block;
            color: ${colors.dinoSand}
        }
    }
`

const Overlay = styled.div` 
    background-color: ${colors.darkDinoGreen};
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
`

const Heading = styled.h1`
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101; */
    flex: 1;
`

const HouseOfDivider = ({crewImage}) => {

    const storiesRef = useRef(null)
    const tl = useRef()

    useEffect(() => {
        let timeline = tl.current
        let q = gsap.utils.selector(storiesRef.current)

        let box = q('.right');

        // multiply by number of items less 1
        // let height = box[0].offsetHeight * 7.1;

        // gsap.from(storiesRef.current, {
        //     width: '50%',
        //     height: 1/3,
        //     transformOrigin:'center',
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: storiesRef.current,
        //         start: 'top, bottom',
        //         end: 'top, 25%',
        //         scrub: true
        //     }
        // });

        // timeline = gsap.timeline({
        //     defaults: { ease: "none" },
        //     scrollTrigger: {
        //         trigger: storiesRef.current,
        //         start: 'top 50%',
        //         end: 'bottom top',
        //         scrub: true,
        //     },
        // })
        // timeline.to(q('.right'), {
        //     y: -height,
        // }, '<')
    }, [])

    return (
        <HouseDivider ref={storiesRef}>
            <Heading className={responsiveTitle1}>House of</Heading>
            {/* <Overlay /> */}
            <BgImage image={crewImage} className="dividerBgImg" style={{ }}>
                {/* <TitleContainer>
                    <DividerTitle className="left">House Of</DividerTitle>
                    <DividerTitle className="right">
                        <span>Stories</span>
                        <span>Fun</span>
                        <span>Games</span>
                        <span>Silliness</span>
                        <span>Love</span>
                        <span>Celebration</span>
                        <span>You</span>
                        <span style={{color: 'white'}}>Dinosaur</span>
                    </DividerTitle>
                </TitleContainer> */}
            </BgImage>
        </HouseDivider>
    )
}

export default HouseOfDivider;