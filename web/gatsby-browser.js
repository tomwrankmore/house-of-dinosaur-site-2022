// import React from 'react'
// import GlobalContextProvider from './src/context/GlobalContextProvider'

// export const wrapRootElement = ({ element }) => {
    
//   return (
//     <GlobalContextProvider>
//       {element}
//     </GlobalContextProvider>
//   )
// }


// BG IMAGE polyfill
// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }