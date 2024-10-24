import IMAGES from "@/assets/images";
import Reveal from "../Reveal";
import PlayFairText from "../ui/PlayfairText";

const Item3 = () => {
  const brands = [
    IMAGES.BRANDS.GET_EQUITY,
    IMAGES.BRANDS.GRENADINES,
    IMAGES.BRANDS.RAVEN_BANK,
    IMAGES.BRANDS.LOOSE_MEDIA,
    IMAGES.BRANDS.PALTON_MORGAN,
    IMAGES.BRANDS.BRACKEN,
  ];

  return (
    <div
      className="grid content-center gap-y-4 sm:gap-y-6 md:gap-y-8 px-4 py-4 sm:py-6"
      id="about"
    >
      <PlayFairText>(Brands We've Worked With)</PlayFairText>

      <div className="grid grid-cols-2 sm:grid-cols-3 content-start gap-4 sm:gap-6 md:gap-8">
        {brands.map((brand, index) => (
          <Reveal key={index} delay={0.2}>
            <div className="flex items-center justify-center">
              <img
                src={brand}
                alt="Brand"
                className="w-[100px] h-[70px] sm:w-[120px] sm:h-[80px] md:w-[150px] md:h-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Item3;
