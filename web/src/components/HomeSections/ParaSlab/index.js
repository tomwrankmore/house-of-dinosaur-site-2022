import React, {useRef} from "react";
import {GatsbyImage} from "gatsby-plugin-image"
import styled from "styled-components";
import {device} from '../../../styles/mediaQueries';
import {colors} from '../../../styles/colours'
import FlexSection from "../../FlexSection";

// export const StyledHero = styled.section`
//     background-color: ${colors.dinoOffWhite};
//     position: relative;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100vw;

//   @media ${device.mediaMinSmall} {    
//     }
// `

const ParallaxSlab = (props) => {
    return (
        <FlexSection>
            <div>
                {/* {image2 && image2.asset && (
                    <GatsbyImage 
                            image={image2.asset.gatsbyImageData} 
                            alt={image2.alt}
                            quality="50"
                            style={{height: '100%'}}
                            className='imgWrapper'
                            imgClassName="imgFile"
                            layout="fixed"
                        />       
                )} */}
                gatsby image goes here
            </div>
        </FlexSection>
    )
}

export default ParallaxSlab; 