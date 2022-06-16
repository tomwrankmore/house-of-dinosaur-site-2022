import gsap from 'gsap';

const openMenu = (menu, revealMenu, revealMenuShadow) => {
  console.log('openMenu Ran')
  gsap.set(menu, {
    duration: 0,
    css: { display: 'block' },
  });
  gsap.to([revealMenuShadow, revealMenu], {
    duration: 0,
    opacity: 1,
    height: '100%',
  });
};

export default openMenu;
