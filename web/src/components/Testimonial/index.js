import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"

const Testimonial = ({logo}) => {
    const logoData = logo.edges[0].node.image.asset.gatsbyImageData

    const testimonialLogo = {
      height: '100%',
      width: '100%',
      maxWidth: '250px',
      margin: '0 auto',
      display: 'block'
    }

    return (
      <section className="py-6 bg-dinoOffWhite overflow-hidden md:py-8 lg:py-10">
        <div className="relative max-w-7xl mx-auto px-4 pb-8 sm:px-6 lg:px-8 border border-gray-800 rounded-lg">
          <div className="relative">
            <GatsbyImage
                image={logoData} 
                alt="Partner Logo"
                quality="50"
                style={testimonialLogo}
                className="clientLogoImg"
                imgClassName="clientLogoImgFile"
                layout="fixed"
                objectFit="contain"
                placeholder="blurred"
            /> 
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                  alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">Person Personville</div>
                    <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
                    <div className="text-base font-medium text-gray-500">Head of Partnerships, Glastonbury</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonial