import React, {useRef, useEffect, useState} from "react";
import gsap from "gsap";
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
import ParallaxSlab from "../components/HomeSections/ParaSlab/"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import Spinner from '../components/SVGComponents/spinner'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
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

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const spinnerRef = useRef(null)
  const houseRef = useRef(null)

  const revealRefs = useRef([]);
  revealRefs.current = [];
  const addToRefs = (el) => {
      if(el && !revealRefs.current.includes(el)) {
          revealRefs.current.push(el)
      }
  };
  const items = revealRefs.current;
  const spinnerTl = useRef();

  const reffyRef = useRef()
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
      heroAnim(smoother, items, spinnerRef.current, spinnerTl.current)
      straplineAnim(smoother, straplineRef.current, straplineTl.current, reffyRef.current)
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
    <Layout id="smooth-content">
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <Spinner ref={spinnerRef} />
        <Hero addToRefs={addToRefs} />
        <StraplineSection straplineRef={straplineRef} reffyRef={reffyRef} />
        <ParallaxSlab />
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
        <Container style={{height: 'calc(100vh - 88px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '88px'}}>
          <h1 style={{color: 'black'}}>Section One</h1>
        </Container>
        <Container style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1 style={{color: 'black'}}>Section Two</h1>
        </Container>
    </Layout>
  );
};

export default IndexPage;
