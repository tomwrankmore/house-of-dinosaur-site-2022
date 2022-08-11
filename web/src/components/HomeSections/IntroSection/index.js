import React, {useRef, useEffect} from "react";
import classNames from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import styled from "styled-components";
import { colors } from "../../../styles/colours";
import { device } from "../../../styles/mediaQueries";
import FlexSection from "../../FlexSection";
import { paragraph, responsiveTitle1, responsiveTitle3 } from "../../../components/typography.module.css"
import Dino from "../../../assets/dino.svg"

const IntroSectionInner = styled.div` 
    width: calc(100% - 2rem);
    height: 100%;
    padding: 2rem;
    background-color: ${colors.dinoSand};
    .you {
        font-weight: bold;
        text-decoration: underline;
        font-size: 1.2rem;
    }
    @media ${device.mediaMinLarge} {
        height: calc(100% - 2rem);
    }
`

const FlexInner = styled.div` 
    display: flex;
    position: relative;
    overflow: hidden;
    height: 100%;
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
    display: flex;
    align-items: center;
    justify-content: center;
    
    .dinoImg {
        max-width: 320px;
        width: 100%;
    }
    @media ${device.mediaMinLarge} {    
        flex: 4;
    }
`

const RightColumn = styled.div` 
    flex: 1;
    @media ${device.mediaMinLarge} {
        flex: 6;
    }
`

const IntroSection = React.forwardRef((props, ref) => {
    
    return (
        <FlexSection bg={colors.darkDinoGreen} ref={ref}>
            <IntroSectionInner>
                <FlexInner>
                    <LeftColumn>
                        <Dino className='dinoImg'/>
                    </LeftColumn>
                    <RightColumn>
                        <h1 className={responsiveTitle1}>Introducing the most incredible people in the known universe... <strong>You</strong>.</h1>
                        <p className={paragraph}>Remember when you were a kid and everything felt new and exciting and nothing was impossible and dinosaurs were cool? House of Dinosaur remembers.</p>
                        <p className={paragraph}>They'll take that feeling, shower it in festival sauce and set it to music. They'll spray it silver and fire it from a cannon. They'll write a story full of it and drop you right in the middle.</p>
                        <p className={paragraph}>House of Dinosaur engineers story driven, party entertainment for festivals, club nights and corporate events that makes the audience the star of the show.</p>
                        <p className={paragraph}>So, if you've never played Disco Dodgeball in the desert dressed as a dinosaur dancing to DJs, get in touch.</p>
                    </RightColumn>
                </FlexInner>

            </IntroSectionInner>
        </FlexSection>
    )

})

export default IntroSection;