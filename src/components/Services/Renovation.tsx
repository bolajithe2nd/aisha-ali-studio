import IMAGES from "@/assets/images";
import ServiceComponent from "./ServiceComponent";

const Renovation = () => {
  const services = [
    "Space Reconfiguration",
    "Interior Updates & Upgrades",
    "Structural Modifications",
    "Sustainable Renovation Solutions",
  ];

  return (
    <ServiceComponent
      imageSrc={IMAGES.SERVICES.RENOVATION}
      title="Renovation"
      description="Transforming spaces with expert renovations that blend style, functionality, and modern design."
      services={services}
      reverseOrder={true}
    />
  );
};

export default Renovation;
