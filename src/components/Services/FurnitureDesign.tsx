import IMAGES from "@/assets/images";
import ServiceComponent from "./ServiceComponent";

const FurnitureDesign = () => {
  const services = [
    "Custom Furniture Design",
    "Material & Finish Selection",
    "Ergonomic Design Solutions",
    "Bespoke Furniture Production",
  ];

  return (
    <ServiceComponent
      imageSrc={IMAGES.SERVICES.FURNITURE}
      title="Furniture Design"
      description="Bespoke furniture crafted for style, comfort, and functionality, tailored to fit your space."
      services={services}
    />
  );
};

export default FurnitureDesign;
