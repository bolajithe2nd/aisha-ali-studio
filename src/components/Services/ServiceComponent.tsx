import React from "react";
import Reveal from "../Reveal";
import PlayFairText from "../ui/PlayfairText";

interface ServiceProps {
  imageSrc: string;
  title: string;
  description: string;
  services: string[];
  reverseOrder?: boolean;
}

const ServiceComponent: React.FC<ServiceProps> = ({
  imageSrc,
  title,
  description,
  services,
  reverseOrder = false,
}) => {
  return (
    <div
      className={`bg-background sticky top-0 w-full h-fit lg:h-screen grid content-start grid-cols-1 ${
        reverseOrder ? "lg:grid-cols-[55%_45%]" : "lg:grid-cols-[45%_55%]"
      } overflow-hidden`}
    >
      {/* Item 1 (Image) */}
      <div
        className={`h-[250px] sm:h-[400px] md:h-[500px] lg:h-full relative border overflow-hidden ${
          reverseOrder && "lg:order-last"
        }`}
      >
        <img
          src={imageSrc}
          alt="Interior Design"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Item 2 (Text) */}
      <div className="grid gap-y-12 md:grid-rows-[1.4fr_0.6fr] content-start p-6 sm:p-8 md:p-10 lg:py-20 lg:px-24 h-[70vh] lg:h-screen border">
        {/* Item 1 */}
        <div className="grid gap-y-4 content-start">
          <Reveal>
            <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black uppercase tracking-tight">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-futura-medium max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] text-muted-foreground">
              {description}
            </p>
          </Reveal>
        </div>

        <div className="grid content-start gap-y-4 mt-8 lg:mt-0">
          <PlayFairText>({title} Services)</PlayFairText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-0">
            {services.map((service, index) => (
              <Reveal key={index} delay={0.2}>
                <p className="text-lg sm:text-xl lg:text-2xl font-futura-medium max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] leading-normal sm:leading-relaxed lg:leading-[3rem]">
                  {service}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
