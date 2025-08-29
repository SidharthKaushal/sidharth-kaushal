import { EducationCard } from "../components/EducationCard";
import { SectionHeadingPrimary } from "../components/SectionHeadingPrimary";
import { EDUCATION } from "../data/education";
export const EducationSection = () => {
  return (
    <>
      <section className="py-16" id="education">
        <div className="container">
          <SectionHeadingPrimary
            primaryHeading={" Education"}
            secondaryHeading={"Academic Background  "}
            description={`I have built a solid academic foundation through dedicated study and hands-on experience, blending theoretical knowledge with practical application. This education has strengthened my analytical thinking, creativity, and adaptability, empowering me to take on diverse challenges with confidence and insight.`}
          />
          <ul className="flex flex-col gap-4">
            {EDUCATION.slice()
              .reverse()
              .map((card, i) => (
                <EducationCard {...card} key={i}/>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};
