import React from "react"
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

