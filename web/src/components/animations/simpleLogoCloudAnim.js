import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const simpleLogoCloudAnim = (ref, tl) => {
  let q = gsap.utils.selector(ref);
  gsap.set(q(".clientLogo"), {
    visibility: "hidden",
    opacity: 0,
    yPercent: 50,
    xPercent: 10,
  });
  tl = gsap
    .timeline({
      defaults: { ease: "back" },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
    })
    .to(q(".clientLogo"), {
      yPercent: 0,
      xPercent: 0,
      autoAlpha: 1,
      stagger: {
        amount: 0.25,
        each: 0.1,
      },
    });
};

export default simpleLogoCloudAnim;
