import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { getImage, GatsbyImage } from "gatsby-plugin-image"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import styled from "styled-components";
import { colors } from "../../styles/colours";
import { device } from '../../styles/mediaQueries';

import { paragraph, responsiveTitle1, responsiveTitle3 } from "../../components/typography.module.css";
import { useEffect } from "react";

const LogoCloud = styled.div` 
  grid-template-columns: repeat( auto-fit, minmax(120px, 1fr) );

  .clientLogo {
    padding: 1rem;
    &:not(:last-child) {
      border-right: solid 1px ${colors.dinoSand};
    }
  }
`

const SimpleLogoCloud = React.forwardRef(({clientData, title, paragraph, logoLength}, ref) => {
    return (
      <div className="bg-dinoOffWhite px-4 py-16" ref={ref}>
          <h1 className={`${responsiveTitle1} bold text-center`}>{title}</h1>
          <p className="text-center mb-8">
              {paragraph}
          </p>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 rounded-lg">
            <LogoCloud className={`grid`}>
            {clientData.map((logo, idx) => {
                  return (
                      <div key={idx}  className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 clientLogo">
                          <GatsbyImage
                              image={logo.image.asset.gatsbyImageData} 
                              alt="Logo"
                              quality="50"
                              style={{height: '100%', width: '100%'}}
                              className='clientLogoImg'
                              imgClassName="clientLogoImgFile"
                              layout="fixed"
                              objectFit="contain"
                              placeholder="blurred"
                          /> 
                      </div>
                  )
              })
            }
            </LogoCloud>
          </div>
      </div>
    )
  }
)

export default SimpleLogoCloud