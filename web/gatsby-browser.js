import React from "react";

// BG IMAGE polyfill
// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  const { pathname } = location;
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/`, `/404`, `/archive`, `/contact`, `/portfolio`];
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    window.scrollTo(0, 0);
  }

  return false;
};
