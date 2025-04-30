import { SKILLS } from "../data/skills";
import { HoverEffect } from "./ui/card-hover-effect";

export const SkillsCard = () => {
  return (
    <>
       <HoverEffect items={SKILLS}/>
    </>
  );
};
