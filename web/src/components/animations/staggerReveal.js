import gsap from 'gsap';

const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power4.inOut',
    stagger: {
      amount: 0.1,
    },
  });
};

export default staggerReveal;
