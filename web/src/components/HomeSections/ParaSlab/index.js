import React, {useRef} from "react";
import styled from "styled-components";
import {device} from '../../styles/mediaQueries';
import {colors} from '../../styles/colours'

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

const NewHeroWrapper = styled.div` 
    position: relative;
    height: auto;
    width: clamp(320px, 60vw, 1024px);
`

const ParallaxSlab = (props) => {
    return (
    <div>
        <p>💩</p>
    </div>
    )
}

export default ParallaxSlab; 