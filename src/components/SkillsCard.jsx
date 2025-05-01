import { SKILLS } from "../data/skills";
import { HoverEffect } from "./ui/skills-card-hover";

export const SkillsCard = () => {
  return (
    <>
       <HoverEffect items={SKILLS}/>
    </>
  );
};
