import React, {useRef, useEffect, useState} from "react";
import gsap from "gsap";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import styled from "styled-components";

import { roll } from '../lib/helpers';

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

const WrapperRollingText = styled.div` 
  white-space: nowrap;
  border-top: 1px solid #6f6f6f;
`

const RollingText = styled.div` 
  font-size: 6vw;
  display: inline-block;
  padding-left: 10px;
`

const WrapperRollingText02 = styled.div` 
  white-space: nowrap;
  /* font-family: 'Playfair Display', serif; */
  margin-top: 10px;
`

const RollingText02 = styled.div` 
  font-size: 6vw;
  display: inline-block;
  padding-left: 13px;
`

const RollingLogos = styled.div` 
  width: 100vw;
  height: 100vh;
  overflow-x:hidden;
  position: relative;

    .rollingText {
      font-size: 6vw;
      display: inline-block;
      padding-left: 10px;
    }
    .wrapperRollingText02 {
      white-space: nowrap;
      /* font-family: 'Playfair Display', serif; */
      margin-top: 10px;
    }
    .rollingText02 {
      font-size: 6vw;
      display: inline-block;
      padding-left: 13px;
    }
    span{
      font-family:sans-serif;
      font-weight:600;
      color:green;
    }
`

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

  const rollingTextRef1 = useRef()
  const rollingTextRef2 = useRef()

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
      let direction = 1; // 1 = forward, -1 = backward scroll
    
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

      const roll1 = roll(rollingTextRef1.current, {duration: 10})
      const roll2 = roll(rollingTextRef2.current, {duration: 10}, true)
      const scroll = ScrollTrigger.create({
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
          }
        }
      });

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

        <RollingLogos>
          <WrapperRollingText>
            <RollingText class="text" ref={rollingTextRef1}>
              <span>• Client •</span> Client, professional-grade Client for the modern web
            </RollingText>
          </WrapperRollingText>

          {/* <WrapperRollingText02 ref={rollingTextRef2}>
            <RollingText02 class="text">
              <span>• GreenSock •</span> Ultra high-performance, professional-grade animation for the modern web
            </RollingText02>
          </WrapperRollingText02> */}
        </RollingLogos>
          
        </div>
    </Layout>
  );
};

export default IndexPage;
