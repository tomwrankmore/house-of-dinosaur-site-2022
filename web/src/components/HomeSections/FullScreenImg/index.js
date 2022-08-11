import React, {useRef, useEffect} from "react";
import { graphql, useStaticQuery } from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image"
import classNames from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import styled from "styled-components";
import { colors } from "../../../styles/colours";
import { device } from "../../../styles/mediaQueries";
import FlexSection from "../../FlexSection";
import { paragraph } from "../../../components/typography.module.css"

const IntroSection = ({crewImage}) => {
    <FlexSection>
        {crewImage && (
            <GatsbyImage 
                image={crewImage}
                alt=""
                quality="75"
                style={{height: '100%', width: '100%'}}
                className='crewImg'
                imgClassName="crewImgFile"
                layout="fixed"
            />
        )}
    </FlexSection>
}

export default IntroSection