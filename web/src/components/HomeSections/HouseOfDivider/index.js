import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import styled from "styled-components";
import { colors } from "../../../styles/colours";

const HouseDivider = styled.div` 
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
    background-color: ${colors.dinoSunshine};
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
    font-size: clamp(2rem, 4rem, 10vw);
    font-weight: bold;

    &.left {
        margin-right: 1rem;
    }

    &.right {
        display: flex;
        flex-direction: column;
        height: 6rem;
        
        span {
            display: block;
            color: ${colors.dinoSand}
        }
    }
`

const HouseOfDivider = (props) => {

    const storiesRef = useRef(null)
    const tl = useRef()

    const items = [
        'Stories',
        'Fun',
        'Games',
        'Silliness',
        'Love',
        'Celebration',
        'You',
        'Dinosaur'
    ]

    useEffect(() => {
        let timeline = tl.current
        let q = gsap.utils.selector(storiesRef.current)

        let box = q('.right');

        // multiply by number of items less 1
        let height = box[0].offsetHeight * 7;

        timeline = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: storiesRef.current,
                start: 'top 50%',
                end: 'bottom top',
                markers: true,
                scrub: 1,
                // pin: storiesRef.current
            },
        })
        // timeline.to(storiesRef.current, {
        //     yPercent: 100
        // })
        timeline.to(q('.right'), {
            y: -height,
        }, '<')
    }, [])

    return (
        <HouseDivider ref={storiesRef}>
            <TitleContainer>
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
            </TitleContainer>
            
        </HouseDivider>
    )
}

export default HouseOfDivider;