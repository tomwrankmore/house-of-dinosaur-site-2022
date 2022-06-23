import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

const straplineAnim = (smoother, strapline, straplineTl, strapRef) => {
  
  let tl = straplineTl
  tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      scrollTrigger: {
          trigger: strapRef,
          start: 'top 90%',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
          // scrub: true,
      },
  })

  const childLines = new SplitText(strapline, {
      type: 'lines',
      linesClass: 'lineChild',
    });
    const parentLines = new SplitText(strapline, {
      type: 'lines',
      linesClass: 'lineParent',
    });

    smoother.effects(strapRef, { speed: 1.2, lag: 0.3 });
    // smoother.effects(tiledBgRef, { lag: 0.1 });

  tl.from(childLines.lines, {
      yPercent: 120,
      stagger: {
        amount: 0.25,
        each: 0.1,
      },
  })
  // tl.from(strapRef, {
  //   xPercent: 10,
  //   yPercent: 50,
  //   autoAlpha: 0,
  //   duration: 1
  // }, '<')
  }

  export default straplineAnim;