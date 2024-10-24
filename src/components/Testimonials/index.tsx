import CustomCursor from "../CustomCursor";
import SectionHeader from "../ui/SectionHeader";
import TestimonialsList from "./TestimonialsList";

const Testimonials = () => {
  return (
    <section className="bg-background border-t grid gap-y-8" id="testimonials">
      <CustomCursor />

      {/* Section Header */}
      <SectionHeader
        title="What Our Clients Say"
        description="Hear our clients about their success stories and experiences with us."
        subTitle="Testimonials"
        position="03"
      />

      {/* Testimonial */}
      <TestimonialsList />
    </section>
  );
};

export default Testimonials;
