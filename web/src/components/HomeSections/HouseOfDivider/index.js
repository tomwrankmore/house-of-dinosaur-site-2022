import React from "react";
import FlexSection from "../../FlexSection/";
import { BgImage } from "gbimage-bridge";

import styled from "styled-components";
import { colors } from "../../../styles/colours";
import { device } from "../../../styles/mediaQueries"

const funListItems = [
    'Stories',
    'Fun',
    'Games',
    'Silliness',
    'Love',
    'Celebration',
    'You',
]

const HouseDivider = styled.div` 
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 2rem);
    margin: 0 auto;
    background-color: ${colors.dinoSunshine};
    margin-bottom: 1rem;

    .dividerBgImg {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        @media ${device.mediaMinMedium} { 
            width: 60%;
        }
    }
`

const HeadingWrapper = styled.div`
    width: 50%;
    padding: 2rem;
    position: relative;
    display: flex;
    @media ${device.mediaMinMedium} { 
        width: 40%;
    }
`

const Overlay = styled.div` 
    background-color: ${colors.darkDinoGreen};
    opacity: 0.85;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
`

const HouseOf = styled.h1` 
    padding-right: 1rem;
    font-size: clamp(1rem, 10vw, 3rem)!important; 
    font-weight: bold;
    color: #fff;
`
const FunList = styled.ul` 
    font-weight: bold;
    font-size: clamp(1rem, 10vw, 3rem); 
    position: relative;
    z-index: 101;
    flex: 1;
    overflow: hidden;
    li {
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        &.funItem {
            color: ${colors.dinoSand};
        }
    }
`

const HouseOfDivider = React.forwardRef(({crewImage}, ref) => {

    return (
        <FlexSection ref={ref}>
            <HouseDivider>
                <HeadingWrapper className="headingWrapper">
                    <div className="absolute lg:relative z-40 flex flex-row bg-dinoSunshine w-80 lg:w-full">
                        <HouseOf className='dividerHeading'>House of</HouseOf>
                        <FunList>
                            {funListItems.map((item, idx) => {
                                return (
                                    <li className="funItem" key={idx}>
                                        <span className=''>{item}</span>
                                    </li>
                                )
                            })}
                            <li className="dinoItem">
                                <span className=''>Dinosaur</span>
                            </li>
                        </FunList>
                    </div>
                </HeadingWrapper>
                
                <BgImage image={crewImage} className="dividerBgImg" style={{ }}>
                    <Overlay className="overlay"/>
                </BgImage>
            </HouseDivider>
        </FlexSection>  
    )
})

export default HouseOfDivider;