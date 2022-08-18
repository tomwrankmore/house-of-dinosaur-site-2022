import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const straplineAnim = (smoother, straplineSectionRef, straplineTl) => {
  let q = gsap.utils.selector(straplineSectionRef);

  straplineTl = gsap.timeline({
    defaults: { ease: "power4.out" },
    scrollTrigger: {
      trigger: straplineSectionRef,
      start: "top 50%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
  });

  const childLines = new SplitText(q(".straplineText"), {
    type: "lines",
    linesClass: "lineChild",
  });
  const parentLines = new SplitText(q(".straplineText"), {
    type: "lines",
    linesClass: "lineParent",
  });

  straplineTl.from(".lineChild", {
    yPercent: 120,
    stagger: {
      amount: 0.25,
      each: 0.1,
    },
  });
};

export default straplineAnim;
