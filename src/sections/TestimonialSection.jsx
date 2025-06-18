import { SectionHeadingPrimary } from "../components/SectionHeadingPrimary";
import { TestimonialCard } from "../components/TestimonialCard";
export const TestimonialSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeadingPrimary
          primaryHeading={"Testimonials"}
          secondaryHeading={"Words from Clients"}
          description={`Over the years, I’ve had the privilege of working with diverse teams and clients on impactful front-end projects. Here’s what they say about the experience of working together and the results delivered.`}
        />
        <TestimonialCard />
      </div>
    </section>
  );
};
