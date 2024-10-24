import Reveal from "../Reveal";

const Link2 = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Reveal>
      <a
        href={href}
        className={`p-1 relative font-futura-medium transition-all duration-300 ease-in-out hover:text-black before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[2px] before:bg-black 
  before:scale-x-100 before:origin-left before:transition-transform before:duration-300 before:ease-in-out 
  hover:before:origin-right hover:before:scale-x-0 project-link ${className}`}
      >
        {children}
      </a>
    </Reveal>
  );
};

export default Link2;
