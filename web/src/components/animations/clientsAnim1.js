import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

const clientsAnim1 = (clientsSection1Ref, clientsTL1) => {
  let q = gsap.utils.selector(clientsSection1Ref)
  gsap.set(q('.clientLogo'), {
    visibility: 'hidden',
    opacity: 0,
    yPercent: 50,
    xPercent: 10,
  })
  clientsTL1 = gsap.timeline({
      defaults: { ease: "back" },
      scrollTrigger: {
          trigger: clientsSection1Ref.current,
          start: 'top 50%',
          toggleActions: 'play none none reverse'
      }
  })
  .to(q('.clientLogo'), {
      yPercent: 0,
      xPercent: 0,
      autoAlpha: 1,
      stagger: {
        amount: 0.25,
        each: 0.1,
      },
  })
}

  export default clientsAnim1;