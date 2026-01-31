import { Link } from "react-router-dom";
import { CaseStudyBlock } from "../components/CaseStudyBlock";
import { SectionHeadingPrimary } from "../components/SectionHeadingPrimary";
import { FaArrowRight } from "react-icons/fa6";
export const CaseStudySec = ({ buttonLinkText, sectionHeading, showProjects }) => {
  return (
    <section className="pb-16 md:pb-28" id="projects">
      <div className="container">
        {sectionHeading && (
          <SectionHeadingPrimary
            primaryHeading={"Case Studies"}
            secondaryHeading={"Real Projects, Real Impact"}
            description={`Dive into a curated selection of case studies that showcase how thoughtful design, clean code, and collaborative problem-solving have delivered measurable results across a range of industries. Each project reflects a tailored solution to a unique challenge—highlighting process, execution, and outcomes.`}
          />
        )}
        <CaseStudyBlock showProjects = {showProjects}/>
        {buttonLinkText && (
          <Link
            className="flex items-center gap-4 group cursor-pointer mt-10 md:mt-0 justify-center md:justify-end"
            to="projects"
          >
            <span className="font-semibold text-black font-primary text-xl capitalize">
              {buttonLinkText}
            </span>
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-main text-white group-hover:bg-main-hover  transition duration-300">
              <FaArrowRight className="w-5 h-5" />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};
