import React from "react";
import { ExperienceSection } from "../sections/ExperienceSection";
import { FirstSketch } from "../sections/FirstSketch";
import { Skills } from "../sections/Skills";
import { TestimonialSection } from "../sections/TestimonialSection";
import { SmoothCursor } from "../components/ui/SmoothCursor";
export const Home = () => {
  return (
    <>
      <ExperienceSection />
      <Skills />
      <FirstSketch/>
      <TestimonialSection/>
      <SmoothCursor/>
    </>
  );
};
