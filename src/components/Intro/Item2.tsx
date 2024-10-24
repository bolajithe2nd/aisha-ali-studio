import Reveal from "../Reveal";
import Link2 from "../ui/Link2";
import PlayFairText from "../ui/PlayfairText";

const Item2 = () => {
  return (
    <div
      className="h-fit lg:min-h-screen grid content-center gap-y-3 sm:gap-y-4 md:gap-y-6 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8"
      id="about"
    >
      <PlayFairText>(About Us)</PlayFairText>

      <Reveal>
        <h1 className="text-5xl md:text-8xl lg:text-9xl xl:text-8xl font-semibold tracking-wide uppercase">
          Transforming <br />
          Spaces, <br />
          Elevating <br />
          Style.
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-lg sm:text-xl md:text-2xl font-futura max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] text-muted-foreground leading-relaxed sm:leading-relaxed">
          We are dedicated to creating inspiring interiors that reflect your
          unique style and elevate your space. Our team blends innovative design
          with thoughtful functionality, ensuring each project captures your
          vision. From concept to completion, we focus on crafting environments
          that engage and resonate with you. Let us transform your space and
          bring your design dreams to life.
        </p>
      </Reveal>

      <div className="flex mt-4 sm:mt-5 md:mt-6">
        <Link2
          className="text-lg sm:text-xl md:text-2xl hover:opacity-80 transition-opacity"
          href="#"
        >
          More About Us
        </Link2>
      </div>
    </div>
  );
};

export default Item2;
