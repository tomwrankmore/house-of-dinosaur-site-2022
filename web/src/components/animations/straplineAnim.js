import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

const straplineAnim = (smoother, strapline, straplineTl, reffyRef ) => {
  const split = new SplitText(strapline, { type: 'lines' })
  
  let tl = straplineTl
  tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      scrollTrigger: {
          trigger: strapline,
          start: 'top top+=75%',
          end: 'bottom: top',
          toggleActions: 'play none none reverse',
      },
  })

  const childLines = new SplitText(strapline, {
      type: 'lines, words',
      linesClass: 'lineChild',
    });
    const parentLines = new SplitText(strapline, {
      type: 'lines, words',
      linesClass: 'lineParent',
    });

    smoother.effects(reffyRef, { lag: 0.25 });

  tl.from(childLines.lines, {
      yPercent: 120,
      stagger: {
        amount: 0.25,
        each: 0.1,
      },
      // onComplete: () => {
      //     childLines.revert();
      // },
  })
  }

  export default straplineAnim;