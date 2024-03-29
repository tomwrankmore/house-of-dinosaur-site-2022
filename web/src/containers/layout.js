import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "../styles/global.css"
import Layout from "../components/layout";
import "@fontsource/syne"

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  const id = props.id

  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          );
        }
        return (
          <Layout
            {...props}
            siteTitle={data.site.title}
            id={id}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
