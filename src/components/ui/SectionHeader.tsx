import React from "react";
import PlayFairText from "./PlayfairText";
import Reveal from "../Reveal";

interface HeaderProps {
  title: string;
  description: string;
  subTitle: string;
  position: string;
}

const SectionHeader: React.FC<HeaderProps> = ({
  title,
  description,
  subTitle,
  position,
}) => {
  return (
    <div className="grid gap-y-20 p-6 sm:p-8 md:p-10 lg:py-20 lg:px-24">
      {/* Section Description */}
      <div className="flex items-center justify-between">
        <PlayFairText>({subTitle})</PlayFairText>
        <PlayFairText>({position})</PlayFairText>
      </div>

      {/* Title & Section Intro */}
      <div className="grid gap-y-4 md:max-w-[70%]">
        <Reveal>
          <h1 className="text-7xl lg:text-[10rem] font-black uppercase leading-[1]">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="text-[2rem] lg:text-6xl font-futura-medium leading-[1]">
            {description}
          </h3>
        </Reveal>
      </div>
    </div>
  );
};

export default SectionHeader;
