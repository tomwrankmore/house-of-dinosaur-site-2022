import React from "react";
import {GatsbyImage} from "gatsby-plugin-image"

import FlexSection from "../../FlexSection";

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