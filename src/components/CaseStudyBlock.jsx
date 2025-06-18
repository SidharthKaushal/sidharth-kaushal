import { CaseStudyCards } from "./CaseStudyCards";
import { PORTFOLIODATA } from "../data/projects";
export const CaseStudyBlock = () => {
 
  return (
    <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 pt-30 gap-18">
      {PORTFOLIODATA.map((el, i) => (
        <CaseStudyCards {...el} key={i} index={i}/>
      ))}
    </ul>
  );
};
