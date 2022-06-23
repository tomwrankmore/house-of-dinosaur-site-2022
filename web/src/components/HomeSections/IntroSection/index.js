import React, {useRef, useEffect} from "react";
import { graphql, useStaticQuery } from 'gatsby';
import {GatsbyImage} from "gatsby-plugin-image"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
// import { BgImage } from 'gbimage-bridge';
// import BackgroundImage from "gatsby-background-image";
// import OrangeSquiggle from '../../../assets/squiggles/squiggles-2-orange.svg'
// import MadeOfPlayLogo from '../../../assets/made-of-play-logo-white.svg'

import styled from "styled-components";
import { colors } from "../../../styles/colours";
import {device} from '../../../styles/mediaQueries';
import FlexSection from "../../FlexSection";
import { paragraph } from "../../../components/typography.module.css"


const IntroSectionInner = styled.div` 
    width: 100%;
    height: 100%;
    padding: 4rem;
    .you {
        font-weight: bold;
        text-decoration: underline;
        font-size: 1.2rem;
    }
`

const FlexInner = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 10vw;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    border-top: solid 4px ${colors.darkDinoGreen};
    border-bottom: solid 4px ${colors.darkDinoGreen};
    @media ${device.mediaMinLarge} {    
        flex-direction: row;
    }
`

const Column = styled.div` 
    flex: 1;
    height: 100%;
    width: 100%;
`

const IntroSection = ({crewImage}) => {
    return (
        <FlexSection bg={colors.dinoSand} innerBorder='inset 0px 0px 0px 20px #14463D'>
            <IntroSectionInner>
                <FlexInner>
                    <Column>
                        <p className={paragraph}>Introducing the most incredible people in the known universe... <strong>You</strong>.</p>
                        <p className={paragraph}>Remember when you were a kid and everything felt new and exciting and nothing was impossible and dinosaurs were cool? House of Dinosaur remembers.</p>
                        <p className={paragraph}>They'll take that feeling, shower it in festival sauce and set it to music. They'll spray it silver and fire it from a cannon. They'll write a story full of it and drop you right in the middle.</p>
                        <p className={paragraph}>House of Dinosaur engineers story driven, party entertainment for festivals, club nights and corporate events that makes the audience the star of the show.</p>
                        <p className={paragraph}>So, if you've never played Disco Dodgeball in the desert dressed as a dinosaur dancing to DJs, get in touch.</p>
                    </Column>
                    <Column>
                        {crewImage && (
                            <GatsbyImage 
                                data-speed="auto" 
                                image={crewImage} 
                                // alt={crewImage.alt}
                                quality="50"
                                style={{height: '100%', width: '100%', border: 'solid 0.5rem #14463D', boxShadow: '10px 10px 0px 0px #14463D'}}
                                className='crewImage'
                                imgClassName="crewImageFile"
                                layout="fixed"
                                />       
                        )}
                    </Column>
                </FlexInner>
            </IntroSectionInner>
        </FlexSection>
    )
}

export default IntroSection;