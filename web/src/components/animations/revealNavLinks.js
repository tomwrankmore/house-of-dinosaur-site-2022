import gsap from "gsap";

const revealNavLinks = (links) => {
  gsap.from(links, {
    duration: 0.25,
    x: '120px',
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07,
    },
  });
};

export default revealNavLinks;
