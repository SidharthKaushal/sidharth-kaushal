import { ExperienceSection } from "../sections/ExperienceSection";
import { FirstSketch } from "../sections/FirstSketch";
import { Skills } from "../sections/Skills";
import { TestimonialSection } from "../sections/TestimonialSection";
import { CaseStudySec } from "../sections/CaseStudySec";
import { EducationSection } from "../sections/EducationSection";
import { HeroBanner } from "../sections/HeroBanner";
import { AboutUs } from "../sections/AboutUs";
export const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <ExperienceSection />
      <EducationSection />
      <Skills />
      <CaseStudySec buttonLinkText = "View all case studies" sectionHeading = {true} showProjects = {4}/>
      {/* <FirstSketch /> */}
      {/* <TestimonialSection /> */}
    </>
  );
};
