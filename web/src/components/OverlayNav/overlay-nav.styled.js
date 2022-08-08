import styled from 'styled-components';
import { colors } from '../../styles/colours';
import { device } from '../../styles/mediaQueries';

export const Menu = styled.div`
  display: none;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const MenuShadowLayer = styled.div`
  background-color: ${colors.darkGray};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`
export const MenuLayer = styled.div`
  position: relative;
  background-color: ${colors.dinoAqua};
  height: 100%;
  overflow: hidden;
`

export const ContactWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        &:hover {
            text-decoration: underline
        };

        &.instagram {
            font-size: 2rem;
            color: white;
            display: block;
            transition: all .2s ease-in-out;
            margin-top: 1rem;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
`
export const NavList = styled.ul` 
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    a {
        font-size: clamp(1rem, -0.875rem + 6.33333vw, 8rem);
    }
`

export const ContactButton = styled.a` 
    font-size: 0.875rem;
`