import styled from 'styled-components'
import {device} from '../../styles/mediaQueries'
import {colors} from '../../styles/colours'
import WavyBurger from "../../assets/wavy-hamburger.svg";

export const StyledHeader = styled.div` 
  position: fixed;
  z-index: 100;
  background-color: transparent;
  width: 100%;

  @media ${device.mediaMinSmall} {    
    }
`

export const Wrapper = styled.div` 
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1980px;
  padding: 1em;
  display: flex;
  position: relative;
  z-index: 10;

  @media ${device.mediaMinSmall} {
    padding: 1.5rem 1.5rem;
  }
`

export const Branding = styled.div` 
  font-weight: 600;
  flex: 1;

  a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;
    width: 8rem;

    @media (hover: hover) {
        &:hover {
            color: ${colors.colorAccent};
        }
    }
  }
`

export const ToggleNavButton = styled.button` 
  appearance: none;
  font-size: 3rem;
  border: none;
  background: none;
  margin: 0;
  padding: calc(14 / 17 / 2 * 1rem);
  outline: none;
  color: inherit;
  cursor: pointer;

  svg {
    display: block;
    fill: inherit;
  }
`

export const Nav = styled.nav` 
    display: none;
    ul {
        margin: 0;
        padding: 0;

        li a {
            display: block;
            color: inherit;
            text-decoration: none;
            @media (hover: hover) {
                    &:hover {
                    color: var(--color-accent);
                }
            }
        }
    }
    @media ${device.mediaMaxSmall} {
        position: absolute;
        background: var(--color-white);
        color: var(--color-black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        left: 0;
        right: 0;
        top: 4.3rem;

        ul {
            padding: 1rem 0;
            li a {
                padding: 0.5rem 1.5rem;
            }
        }
    }
    @media ${device.mediaMinSmall} {
        display: block;
        ul {
            list-style: none;
            display: flex;
            justify-content: flex-end;

            li a {
                padding: 0.5rem;
            }
        }
    }
    .showNav {
        display: block;
    }
`

export const StyledWavyBurger = styled(WavyBurger) `
  width: 30px;
`