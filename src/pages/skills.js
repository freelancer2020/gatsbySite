import React from "react";
import SkillsBox from "../components/Skills";
import { StaticImage } from "gatsby-plugin-image";
const Skills = () => {
  return (
    <div>
      <SkillsBox />
      <img
        alt="technology"
        src="https://media.istockphoto.com/photos/hand-holding-light-bulb-and-business-digital-marketing-innovation-picture-id1127257350?k=20&m=1127257350&s=612x612&w=0&h=s0zCX95yDfUUotfNY_Rx55oU68CXtwnR_rNLtT5kd6g="
      />
    </div>
  );
};

export default Skills;
