import React from "react";
import styled from "styled-components"
import { colors } from "../../styles/colours";

const StyledHeroWave = styled.svg` 
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
`

const HeroWave = React.forwardRef(({fill}, ref) => {
    return (
        <StyledHeroWave viewBox="0 0 900 600"><path d="M0 545L50 543.5C100 542 200 539 300 533.2C400 527.3 500 518.7 600 515.8C700 513 800 516 850 517.5L900 519L900 601L850 601C800 601 700 601 600 601C500 601 400 601 300 601C200 601 100 601 50 601L0 601Z" fill={fill}></path></StyledHeroWave>
        )
    }
)

export default HeroWave; 