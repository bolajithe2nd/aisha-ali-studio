import IMAGES from "@/assets/images";
import ServiceComponent from "./ServiceComponent";

const ResidentialDesign = () => {
  const services = [
    "Space Planning",
    "Interior Styling",
    "Furniture & Fixture Selection",
    "Custom Design Solutions",
  ];

  return (
    <ServiceComponent
      imageSrc={IMAGES.SERVICES.RESIDENTIAL}
      title="Residential Design"
      description="Crafting elegant, functional living spaces tailored to your lifestyle."
      services={services}
    />
  );
};

export default ResidentialDesign;
