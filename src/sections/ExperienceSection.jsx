import { ExperienceCard } from "../components/ExperienceCard";
import { SectionHeadingSecondary } from "../components/SectionHeadingSecondary";
export const ExperienceSection = () => {
  return (
    <>
      <section className="pb-16 md:pb-28 relative" id="experience">
        <div className="container">
          <SectionHeadingSecondary
            primaryHeading={"Experiences"}
            secondaryHeading={"Explore my journey"}
          />
          <ExperienceCard/>
        </div>
      </section>
    </>
  );
};
