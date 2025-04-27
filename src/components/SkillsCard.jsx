import React from "react";
import { SKILLS } from "../data/skills";

export const SkillsCard = () => {
  return (
    <>
      {SKILLS.map((e) => (
        <li className="border border-gray-300 border-opacity-50 p-5 text-center"></li>
      ))}
    </>
  );
};
