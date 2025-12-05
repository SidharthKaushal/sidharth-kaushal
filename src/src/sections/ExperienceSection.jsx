import { ExperienceCard } from "../components/ExperienceCard";
import { SectionHeadingSecondary } from "../components/SectionHeadingSecondary";
export const ExperienceSection = () => {
  return (
    <>
      <section className="py-16 relative" id="experience">
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
