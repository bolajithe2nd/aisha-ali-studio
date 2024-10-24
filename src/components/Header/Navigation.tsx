import { useState, useEffect, useMemo } from "react";

interface Link {
  name: string;
  href: string;
}
interface NavigationProps {
  mobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ mobile = false }) => {
  const [activeLink, setActiveLink] = useState<string>("#about");

  const links: Link[] = useMemo(
    () => [
      {
        name: "About Us",
        href: "#about",
      },
      {
        name: "Our Projects",
        href: "#projects",
      },
      {
        name: "Our Services",
        href: "#services",
      },
      {
        name: "Testimonials",
        href: "#testimonials",
      },
    ],
    []
  );

  useEffect(() => {
    // Observer options
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    // Delay to ensure all sections are available in the DOM
    setTimeout(() => {
      const sections = links.map(
        (link) => document.querySelector(link.href) as HTMLElement
      );

      // Observe each section
      sections.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });

      // Cleanup function
      return () => {
        sections.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      };
    }, 100); // Small delay to ensure DOM is ready
  }, [links]);

  return (
    <ul
      className={`${
        mobile ? "flex flex-col gap-y-6" : "flex items-center gap-x-8"
      } bg-none uppercase`}
    >
      {links.map((link) => (
        <li key={link.name} className="list-none relative">
          <a
            href={link.href}
            className={`font-futura-medium text-xl transition-all duration-300 ease-in-out hover:text-black before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[2px] before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${
              activeLink === link.href ? "before:scale-x-100 text-black" : ""
            }`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
