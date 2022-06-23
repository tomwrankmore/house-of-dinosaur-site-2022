import React, {useRef, useEffect, useState} from "react";
import gsap from "gsap";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/Container/container";
import Hero from "../components/Hero/hero";
import { heroAnim, straplineAnim } from "../components/animations/";

import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/ProjectPreviewGrid/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import StraplineSection from "../components/HomeSections/StraplineSection/index"
import IntroSection from "../components/HomeSections/IntroSection/"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import Spinner from '../components/SVGComponents/spinner'
import FlexSection from "../components/FlexSection";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    crew: file(relativePath: {eq: "leanback.jpg"}) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 50, 
          webpOptions: {quality: 70})
      }
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  const crewImage = getImage(data.crew);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const spinnerRef = useRef(null)

  const revealRefs = useRef([]);
  revealRefs.current = [];
  const addToRefs = (el) => {
      if(el && !revealRefs.current.includes(el)) {
          revealRefs.current.push(el)
      }
  };
  const items = revealRefs.current;
  const spinnerTl = useRef();

  const strapRef = useRef()
  const tiledBgRef = useRef()
  const straplineRef = useRef()
  const straplineTl = useRef();

  useEffect(() => {
      let rotateSetter = gsap.quickTo(spinnerRef.current, 'rotation')
      let clamp = gsap.utils.clamp(-1080, 1080)
    
      let smoother = ScrollSmoother.create({
          content: "#smooth-content",
          smooth: 1.5,
          normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
          ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
          effects: true,
          preventDefault: true,
          onUpdate: (self) => {
            rotateSetter(clamp(self.getVelocity()))
          }
      });
      spinnerTl.current = gsap.timeline()
      heroAnim(smoother, items, spinnerRef.current, spinnerTl.current, tiledBgRef.current)
      straplineAnim(smoother, straplineRef.current, straplineTl.current, strapRef.current)
  }, [])

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <div id="smooth-content">
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <Spinner ref={spinnerRef} />
        <Hero addToRefs={addToRefs} tiledBgRef={tiledBgRef} />
        <StraplineSection straplineRef={straplineRef} strapRef={strapRef} />
        {/* <ParallaxSlab crewImage={crewImage} /> */}
        {/* <Container>
          <h1>Welcome to {site.title}</h1>
          {projectNodes && (
            <ProjectPreviewGrid
              title="Latest projects"
              nodes={projectNodes}
              browseMoreHref="/archive/"
            />
          )}
        </Container> */}
        <IntroSection crewImage={crewImage} />
        <FlexSection>
        💩
        </FlexSection>
        </div>
    </Layout>
  );
};

export default IndexPage;
