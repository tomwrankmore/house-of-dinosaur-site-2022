import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

const introTextAnim = (introSectionRef, introSectionTL) => {

    let q = gsap.utils.selector(introSectionRef)
        
        let titleSplit = new SplitText(q('h1'), {type:"words, chars"})
        let chars = titleSplit.chars

        gsap.set(q('p'), {
            visibility: 'hidden',
            yPercent: 120,
        })

        introSectionTL = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: introSectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
            },
        })
        .from(chars, {
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01
          })
        .to(q('p'), {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: {
                amount: 0.25,
                each: 0.1,
            },
        }, '-=0.55') 
  }

  export default introTextAnim;