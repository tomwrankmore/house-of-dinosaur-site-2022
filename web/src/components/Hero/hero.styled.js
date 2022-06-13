import styled from 'styled-components'
import {device} from '../../styles/mediaQueries'
import {colors} from '../../styles/colours'

export const StyledHero = styled.section`
    background-color: ${colors.dinoOffWhite};
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;

  @media ${device.mediaMinSmall} {    
    }
`

