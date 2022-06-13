import { PortableText } from "@portabletext/react";
import React from "react";

import { Figure } from "../Figure/figure";

const components = {
  types: {
    figure: Figure
  }
};

const BlockContent = ({ blocks }) => <PortableText value={blocks} components={components} />;

export default BlockContent;
