import IMAGES from "@/assets/images";
import ServiceComponent from "./ServiceComponent";

const CommercialDesign = () => {
  const services = [
    "Office Space Planning",
    "Retail Interior Design",
    "Hospitality Design",
    "Workspace Optimization",
  ];

  return (
    <ServiceComponent
      imageSrc={IMAGES.SERVICES.COMMERCIAL}
      title="Commercial Design"
      description="Innovative, functional designs that elevate your business spaces and enhance customer experiences."
      services={services}
      reverseOrder={true}
    />
  );
};

export default CommercialDesign;
