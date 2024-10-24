import { useState, useEffect } from "react";
import IMAGES from "@/assets/images";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";

const imageArray = [
  IMAGES.INTRO.INTRO_1,
  IMAGES.INTRO.INTRO_2,
  IMAGES.INTRO.INTRO_3,
  IMAGES.INTRO.INTRO_4,
];

const Intro = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % imageArray.length
        );
        setFadeClass("fade-in");
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-[45%_55%] lg:min-h-screen">
      {/* Image Slider */}
      <div className="h-[400px] w-full lg:sticky top-0 left-0 lg:h-screen overflow-hidden">
        <div
          className={`transition-opacity duration-500 ${fadeClass} h-full w-full`}
        >
          <img
            src={imageArray[currentImageIndex]}
            alt="Home Slider Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Intro Content */}
      <div className="grid grid-rows-[min-content_min-content_min-content] gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24 md:py-24 lg:py-36 px-4 pb-12 sm:px-8 md:px-16 lg:px-24 border-l-0 lg:border-l-[1.7px]">
        {/* Item 1 */}
        <div className="w-full">
          <Item1 />
        </div>

        {/* Item 2 */}
        <div className="w-full">
          <Item2 />
        </div>

        {/* Item 3 */}
        <div className="w-full">
          <Item3 />
        </div>
      </div>
    </section>
  );
};

export default Intro;
