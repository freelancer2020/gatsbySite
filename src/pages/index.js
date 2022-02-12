import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/Header";

import { StaticImage } from "gatsby-plugin-image";

import "./main.css";

const Front = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Front;

// const data = useStaticQuery(graphql`
//   query {
//     header
//   }
// `);
