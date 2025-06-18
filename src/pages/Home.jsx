import React from "react";
import { ExperienceSection } from "../sections/ExperienceSection";
import { FirstSketch } from "../sections/FirstSketch";
import { Skills } from "../sections/Skills";
import { TestimonialSection } from "../sections/TestimonialSection";
import { CaseStudySec } from "../sections/CaseStudySec";
export const Home = () => {
  return (
    <>
      <ExperienceSection />
      <Skills />
      <CaseStudySec />
      <FirstSketch />
      <TestimonialSection />
    </>
  );
};
