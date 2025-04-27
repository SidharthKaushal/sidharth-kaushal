import { ExperienceCard } from "../components/ExperienceCard";
import { SectionHeadingPrimary } from "../components/SectionHeadingPrimary";
import { EXPERIENCE } from "../data/experience";
export const ExperienceSection = () => {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <SectionHeadingPrimary
            primaryHeading={"Experiences"}
            secondaryHeading={"Explore my journey"}
            description={`With 5+ years of experience as a front-end developer, I have worked
            on various projects, collaborating with teams to create engaging and
            user-friendly websites while ensuring high-quality results and
            client satisfaction.`}
          />
          <ul className="flex flex-col gap-4">
            {EXPERIENCE.slice()
              .reverse()
              .map((e, i) => (
                <ExperienceCard {...e} key={i}/>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};
