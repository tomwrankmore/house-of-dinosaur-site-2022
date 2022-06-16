import gsap from 'gsap';

const closeMenu = (menu, revealMenu, revealMenuShadow) => {
  gsap.to([revealMenu, revealMenuShadow], {
    duration: 0.8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07,
    },
  });
  gsap.set(menu, {
    delay: 1,
    css: { display: 'none' },
  });
};

export default closeMenu;
