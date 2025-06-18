import { CaseStudyBlock } from "../components/CaseStudyBlock";
import { SectionHeadingPrimary } from "../components/SectionHeadingPrimary";

export const CaseStudySec = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeadingPrimary
          primaryHeading={"Case Studies"}
          secondaryHeading={"Real Projects, Real Impact"}
          description={`Dive into a curated selection of case studies that showcase how thoughtful design, clean code, and collaborative problem-solving have delivered measurable results across a range of industries. Each project reflects a tailored solution to a unique challenge—highlighting process, execution, and outcomes.`}
        />
        <CaseStudyBlock />
      </div>
    </section>
  );
};
