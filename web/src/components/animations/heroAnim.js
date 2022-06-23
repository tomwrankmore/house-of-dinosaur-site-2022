import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const heroAnim = (smoother, items, spinnerRef, tl, tiledBgRef ) => {
  gsap.set(items, {
    visibility: 'hidden',
    yPercent: 200,
  })

  smoother.effects(tiledBgRef, { lag: 0.1 });

  tl.to(items, {
    autoAlpha: 1,
    yPercent: 0,
    stagger: 0.1,
    duration: 1,
    ease: "back.out(2.75)"
  })
  items.forEach((item, i) => {
      smoother.effects(item, { lag: i * 0.75 });
  });
  smoother.effects(spinnerRef, { lag: 0.5 });
  }

  export default heroAnim;