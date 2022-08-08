import { format, isFuture } from "date-fns";
import gsap from "gsap";

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(publishedAt);
}

export function getBlogUrl(publishedAt, slug) {
  return `/blog/${format(publishedAt, "yyyy/MM")}/${slug.current || slug}/`;
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

// export const ShowScrollbar = () => {
//   document.getElementsByTagName('body')[0].classList.remove('hide-scroll');
// };

// export const HideScrollbar = () => {
//   document.getElementsByTagName('body')[0].classList.add('hide-scroll');
// };

// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
export const roll = (targets, vars, reverse) => {
  vars = vars || {};
  vars.ease || (vars.ease = "none");
  const tl = gsap.timeline({
          repeat: -1,
          onReverseComplete() { 
            this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
          }
        }), 
        elements = gsap.utils.toArray(targets),
        clones = elements.map(el => {
          let clone = el.cloneNode(true);
          el.parentNode.appendChild(clone);
          return clone;
        }),
        positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
  positionClones();
  elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
  window.addEventListener("resize", () => {
    let time = tl.totalTime(); // record the current time
    tl.totalTime(0); // rewind and clear out the timeline
    positionClones(); // reposition
    tl.totalTime(time); // jump back to the proper time
  });
  return tl;
}