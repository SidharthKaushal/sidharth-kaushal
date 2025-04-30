import React from "react";

import { SectionHeadingPrimary } from "../components/SectionHeadingPrimary";
import { SkillsCard } from "../components/SkillsCard";

export const Skills = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeadingPrimary
          primaryHeading={"My Skills"}
          secondaryHeading={"Skills That Drive Results"}
          description={`Combining creativity with technical precision, I specialize in front-end development, UI/UX design, and responsive web solutions—crafting intuitive digital experiences that are functional, engaging, and future-ready.`}
        />
        {/* <CardHoverEffectDemo/> */}
        <SkillsCard/>
      </div>
    </section>
  );
};
