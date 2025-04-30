import React from "react";
import { ExperienceSection } from "../sections/ExperienceSection";
import { FirstSketch } from "../sections/FirstSketch";
import { Skills } from "../sections/Skills";

export const Home = () => {
  return (
    <>
      <ExperienceSection />
      <Skills />
      <FirstSketch/>
    </>
  );
};
