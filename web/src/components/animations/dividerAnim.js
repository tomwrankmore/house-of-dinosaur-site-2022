import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

const dividerAnim = (dividerSectionRef, dividerSectionTL, dividerSectionTL2) => {

    let q = gsap.utils.selector(dividerSectionRef)
    
    gsap.set(q('.funItem'), {yPercent: 100})
    gsap.set(q('.dinoItem'), {autoAlpha: 0})

    dividerSectionTL = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
            trigger: dividerSectionRef.current,
            start: 'center center',
            end: '100%',
            scrub: true,
            pin: true,
            markers: true
        },
    })
    .to(q('.funItem'), {yPercent: -100,stagger: 0.35,})
    .to(q('.dinoItem'), { autoAlpha: 1 }, '>' )

    dividerSectionTL2 = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
            trigger: dividerSectionRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
        },
    })
    .to(q('.overlay'),{opacity: 0})
    .from(q('.dividerBgImg'),{xPercent: 15,}, '<')
}

export default dividerAnim;