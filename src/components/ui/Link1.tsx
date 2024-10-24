const Link1 = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className={`relative font-futura text-2xl transition-all duration-300 ease-in-out hover:text-black before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${className}`}
    >
      {children}
    </a>
  );
};

export default Link1;
