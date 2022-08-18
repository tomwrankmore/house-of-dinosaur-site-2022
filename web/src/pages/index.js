import React, {useRef, useEffect } from "react";
import gsap from "gsap";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import { heroAnim, straplineAnim, introTextAnim, dividerTextAnim, clientsAnim1, simpleLogoCloudAnim } from "../components/animations/";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import Layout from "../containers/layout";
import SEO from "../components/seo";
import Spinner from "../components/SVGComponents/spinner"
import Hero from "../components/Hero/hero";
import StraplineSection from "../components/HomeSections/StraplineSection/index"
import IntroSection from "../components/HomeSections/IntroSection/"
import HouseDivider from "../components/HomeSections/HouseOfDivider"
import SimpleLogoCloud from "../components/SimpleLogoCloud"
import Testimonial from "../components/Testimonial"
import CTA from "../components/CallToAction"
import Footer from "../components/Footer"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
    dinoFlag: file(relativePath: {eq: "dinoflag.png"}) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 50, 
          webpOptions: {quality: 70})
      }
    }
    dinoImg: file(relativePath: {eq: "dino.png"}) {
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
    clientLogos: allSanityClientBrandLogo {
        edges {
            node {
                id
                image {
                    asset {
                        gatsbyImageData(
                            formats: AUTO, 
                            width: 500,
                            placeholder: BLURRED
                        )
                    }
                    alt
                }
            }
        }
    }
    clientTestimonialLogo: allSanityClientBrandLogo(filter: {title: {eq: "Facebook"}}) {
      edges {
        node {
          id
          image {
            asset {
              gatsbyImageData(formats: AUTO, width: 500, placeholder: BLURRED)
            }
          }
        }
      }
    }
    festivalLogos: allSanityClientFestivalLogo {
        edges {
            node {
                id
                image {
                    asset {
                        gatsbyImageData(
                            formats: AUTO, 
                            width: 500,
                            placeholder: BLURRED
                        )
                    }
                    alt
                }
            }
        }
    }
    festivalTestimonialLogo: allSanityClientFestivalLogo(filter: {title: {eq: "Glastonbury"}}) {
      edges {
        node {
          id
          image {
            asset {
              gatsbyImageData(formats: AUTO, width: 500, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  const crewImage = getImage(data.crew);
  const dinoFlagImg = getImage(data.dinoFlag);
  const dinoImg = getImage(data.dinoImg)

  const clientData1 = data && data.clientLogos && mapEdgesToNodes(data.clientLogos)
  const clientData2 = data && data.clientLogos && mapEdgesToNodes(data.festivalLogos)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const spinnerRef = useRef(null)
  const spinnerTl = useRef();

  // Section Refs
  const heroRef = useRef()
  const straplineSectionRef = useRef()
  const introSectionRef = useRef()
  const dividerSectionRef = useRef()
  const madeOfPlayRef = useRef()
  const clientsSection1Ref = useRef()
  const simpleLogoCloudRef = useRef()
  const simpleLogoCloudRef2 = useRef()
  const tiledBgRef = useRef()

  // Timeline Refs  
  const straplineTl = useRef();
  const introSectionTL = useRef(); 
  const dividerSectionTL = useRef(); 
  const dividerSectionTL2 = useRef(); 
  const madeOfPlayTl = useRef()
  const clientsTL1 = useRef();
  const horizTl = useRef();
  const simpleLogoCloudTl = useRef();
  const simpleLogoCloudTl2 = useRef();

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
      heroAnim(smoother, spinnerRef.current, spinnerTl.current, tiledBgRef.current, heroRef.current)
      straplineAnim(smoother, straplineSectionRef.current, straplineTl.current)
      introTextAnim(introSectionRef, introSectionTL.current)
      dividerTextAnim(dividerSectionRef, dividerSectionTL, dividerSectionTL2)
      // clientsAnim1(clientsSection1Ref, clientsTL1.current)
      simpleLogoCloudAnim(simpleLogoCloudRef, simpleLogoCloudTl.current)
      simpleLogoCloudAnim(simpleLogoCloudRef2, simpleLogoCloudTl2.current)
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
        <Hero tiledBgRef={tiledBgRef} ref={heroRef} />
        <StraplineSection ref={straplineSectionRef} />
        <IntroSection ref={introSectionRef} introSectionTL={introSectionTL.current} /> 
        <HouseDivider ref={dividerSectionRef} crewImage={crewImage} />
        <SimpleLogoCloud 
          clientData={clientData1} 
          title="Brand Partners" 
          paragraph="We've worked with a range of brand on a number of amazing activations. Trusted to bring the vibes by these guys." 
          logoLength={clientData1.length}
          ref={simpleLogoCloudRef} 
        />
        <Testimonial 
          logo={data.clientTestimonialLogo}
          paragraph="We've worked with many events companies but Hod are trusted to bring the vibes." 
        />
        <SimpleLogoCloud 
          clientData={clientData2} 
          title="Festival Partners" 
          paragraph="We also work closely with a range of Festivals. Also trusted to bring the vibes by these guys." 
          logoLength={clientData2.length}
          ref={simpleLogoCloudRef2} 
        />
        <Testimonial 
          logo={data.festivalTestimonialLogo}
          paragraph="We've worked with many events companies but Hod are trusted to bring the vibes." 
        />
        {/* <ClientSection 
          clientData1={clientData1} 
          ref={clientsSection1Ref} 
        /> */}
        <CTA/>
        {/* <Container>
          {projectNodes && (
            <ProjectPreviewGrid
              title="Latest projects"
              nodes={projectNodes}
              browseMoreHref="/archive/"
            />
          )}
        </Container> */}
        <Footer/>
      </div>
    </Layout>
  );
};

export default IndexPage;
