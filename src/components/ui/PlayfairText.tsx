import Reveal from "../Reveal";

const PlayFairText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Reveal delay={0.1}>
      <p className="font-playfair italic text-muted-foreground text-lg sm:text-xl lg:text-2xl font-light">
        {children}
      </p>
    </Reveal>
  );
};

export default PlayFairText;
