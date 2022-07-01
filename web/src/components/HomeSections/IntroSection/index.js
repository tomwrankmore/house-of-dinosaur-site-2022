import React, {useRef, useEffect} from "react";
import { graphql, useStaticQuery } from 'gatsby';
import {GatsbyImage} from "gatsby-plugin-image"
import classNames from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import styled from "styled-components";
import { colors } from "../../../styles/colours";
import { device } from '../../../styles/mediaQueries';
import FlexSection from "../../FlexSection";
import { paragraph } from "../../../components/typography.module.css"

const IntroSectionInner = styled.div` 
    width: calc(100vw - 2rem);
    height: 100%;
    /* height: 100%; */
    padding: 2rem;
    background-color: ${colors.dinoSand};
    .you {
        font-weight: bold;
        text-decoration: underline;
        font-size: 1.2rem;
    }
    @media ${device.mediaMinLarge} {
        height: calc(100vh - 2rem);
    }
`

const FlexInner = styled.div` 
    display: flex;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    gap: 5vw;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0.5rem;
    border-top: solid 2px ${colors.darkDinoGreen};
    border-bottom: solid 2px ${colors.darkDinoGreen};
    @media ${device.mediaMinLarge} {    
        flex-direction: row;
        padding: 2rem 2rem 2rem 1rem;
    }
`

const LeftColumn = styled.div` 
    flex: 1;
    @media ${device.mediaMinLarge} {    
        flex: 4;
    }
`

const RightColumn = styled.div` 
    flex: 1;
    @media ${device.mediaMinLarge} {
        flex: 6;
    }
    display: flex;
    /* align-items: flex-end; */
    justify-content: flex-end;
`

const IntroSection = ({crewImage}) => {
    const introSectionRef = useRef()
    const tl = useRef()

    useEffect(() => {
        let timeline = tl.current
        let q = gsap.utils.selector(introSectionRef.current)
        
        gsap.set(q('.introP'), {
            visibility: 'hidden',
            yPercent: 120,
        })
        timeline = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: introSectionRef.current,
                start: 'top 50%',
                end: 'bottom top',
                toggleActions: 'play none none reverse',
            },
        })
        timeline.to(q('.introP'), {
            yPercent: 0,
            autoAlpha: 1,
            // duration: 2,
            stagger: {
              amount: 0.25,
              each: 0.1,
            },
        })
    }, [])

    return (
        <FlexSection bg={colors.darkDinoGreen} ref={introSectionRef}>
            <IntroSectionInner>
                <FlexInner>
                    <LeftColumn>
                        <p className={classNames({paragraph},'introP')}>Introducing the most incredible people in the known universe... <strong>You</strong>.</p>
                        <p className={classNames({paragraph},'introP')}>Remember when you were a kid and everything felt new and exciting and nothing was impossible and dinosaurs were cool? House of Dinosaur remembers.</p>
                        <p className={classNames({paragraph},'introP')}>They'll take that feeling, shower it in festival sauce and set it to music. They'll spray it silver and fire it from a cannon. They'll write a story full of it and drop you right in the middle.</p>
                        <p className={classNames({paragraph},'introP')}>House of Dinosaur engineers story driven, party entertainment for festivals, club nights and corporate events that makes the audience the star of the show.</p>
                        <p className={classNames({paragraph},'introP')}>So, if you've never played Disco Dodgeball in the desert dressed as a dinosaur dancing to DJs, get in touch.</p>
                    </LeftColumn>
                    <RightColumn>
                        {crewImage && (
                            <GatsbyImage 
                                data-speed="auto" 
                                image={crewImage} 
                                alt=""
                                quality="50"
                                style={{height: '100%', width: '100%', border: 'solid 0.5rem #14463D', boxShadow: '10px 10px 0px 0px #14463D'}}
                                className='crewImage'
                                imgClassName="crewImageFile"
                                layout="fixed"
                            />
                        )}
                    </RightColumn>
                </FlexInner>

            </IntroSectionInner>
        </FlexSection>
    )
}

export default IntroSection;