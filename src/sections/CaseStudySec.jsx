import { CaseStudyBlock } from "../components/CaseStudyBlock";
import { SectionHeadingPrimary } from "../components/SectionHeadingPrimary";
import { FaArrowRight } from "react-icons/fa6";
export const CaseStudySec = () => {
  return (
    <section className="py-16" id="projects">
      <div className="container">
        <SectionHeadingPrimary
          primaryHeading={"Case Studies"}
          secondaryHeading={"Real Projects, Real Impact"}
          description={`Dive into a curated selection of case studies that showcase how thoughtful design, clean code, and collaborative problem-solving have delivered measurable results across a range of industries. Each project reflects a tailored solution to a unique challenge—highlighting process, execution, and outcomes.`}
        />
        <CaseStudyBlock />
        <button className="flex items-center gap-4 group cursor-pointer ms-auto">
          <span className="font-semibold text-black font-primary text-xl capitalize">View all case studies</span>
          <span className="flex items-center justify-center w-20 h-20 rounded-full bg-main text-white group-hover:bg-main-hover  transition duration-300">
            <FaArrowRight className="w-5 h-5" />
          </span>
        </button>
      </div>
    </section>
  );
};
