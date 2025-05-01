import React from "react";
import { SectionHeadingPrimary } from "../components/SectionHeadingPrimary";
import { TestimonialCard } from "../components/TestimonialCard";
export const TestimonialSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeadingPrimary
          primaryHeading={"Testimonials"}
          secondaryHeading={"Explore my journey"}
          description={`With 5+ years of experience as a front-end developer, I have worked
                on various projects, collaborating with teams to create engaging and
                user-friendly websites while ensuring high-quality results and
                client satisfaction.`}
        />
        <TestimonialCard />
      </div>
    </section>
  );
};
