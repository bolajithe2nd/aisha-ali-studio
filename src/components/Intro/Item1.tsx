import Reveal from "../Reveal";
import PlayFairText from "../ui/PlayfairText";

const Item1 = () => {
  return (
    <div className="h-fit lg:min-h-[80vh] grid gap-y-12 content-between py-8 px-4 sm:px-6 sm:py-10 md:py-12 lg:py-16">
      <Reveal>
        <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-wide">
          The Design <br />
          Alchemist
        </h1>
      </Reveal>

      <div className="grid gap-y-3 sm:gap-y-4 md:gap-y-6">
        <PlayFairText>(Based in Abuja, Lagos and Portharcout)</PlayFairText>
        <Reveal delay={0.2}>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-futura-medium max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-[3rem]">
            Committed to designing spaces that reflect brands, inspire
            individuals & foster productive environments.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Item1;
