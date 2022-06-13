import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import { colors } from "../../../styles/colours";
import { straplineAnim } from "../../animations/";

import FlexSection from "../../FlexSection"

const StyledStraplineWrapper = styled.div` 
    position: relative;
    background-color: ${colors.dinoSnow};
    padding: 0rem 2rem;
    border-radius: 1rem;
    box-shadow: 10px 10px 0px 0px ${colors.black};
    border: solid 0.5rem ${colors.black};
    max-width: 65vw;
`

const Strapline = styled.h1` 
    color: ${colors.black};
    font-size: clamp(1.5rem, 2.875rem, 4rem);
    line-height: 4rem;
    text-align: left;
`

const StraplineSection = ({reffyRef}) => {
    const straplineTl = useRef();
    const straplineRef = useRef();
    useEffect(() => {
        straplineAnim(straplineRef.current, straplineTl.current)
    }, [])
    return ( 
        <FlexSection>
            <StyledStraplineWrapper ref={reffyRef}>
                <Strapline ref={straplineRef}>We engineer story driven parties and captivating activations that make the audience the star of the show.</Strapline>
            </StyledStraplineWrapper>
        </FlexSection>
    )
}

export default StraplineSection; 