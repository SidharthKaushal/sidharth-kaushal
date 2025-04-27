import { SKILLS } from "../data/skills";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (

      <HoverEffect items={SKILLS}/>
   
  );
}

