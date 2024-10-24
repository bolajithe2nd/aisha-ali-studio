import SectionHeader from "../ui/SectionHeader";
import CommercialDesign from "./CommercialDesign";
import FurnitureDesign from "./FurnitureDesign";
import Renovation from "./Renovation";
import ResidentialDesign from "./ResidentialDesign";

const Services = () => {
  return (
    <section className="border-t grid gap-y-8" id="services">
      {/* Section Header */}
      <SectionHeader
        title="Services"
        description="Discover our bespoke interior design services, crafted to transform
            your spaces and elevate your lifestyle."
        subTitle="What we do"
        position="02"
      />

      {/* Services */}
      <div>
        <ResidentialDesign />
        <CommercialDesign />
        <FurnitureDesign />
        <Renovation />
      </div>
    </section>
  );
};

export default Services;
