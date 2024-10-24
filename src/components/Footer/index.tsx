import Reveal from "../Reveal";
import Link1 from "../ui/Link1";
import Link2 from "../ui/Link2";
import PlayFairText from "../ui/PlayfairText";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  label: string;
  links: FooterLink[];
};

const Footer = () => {
  const FooterLinks: FooterSection[] = [
    {
      label: "Pages",
      links: [
        { label: "Home", href: "#" },
        { label: "Services", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      label: "Resources",
      links: [
        { label: "Licensing", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
    {
      label: "Support",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Customer Support", href: "#" },
        { label: "Consultation", href: "#" },
      ],
    },
    {
      label: "Social Media",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Pinterest", href: "#" },
        { label: "Behance", href: "#" },
        { label: "Dribbble", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0e1011] grid gap-y-12 content-between text-white p-8 pb-8 lg:p-24 lg:pb-12 lg:h-screen">
      <Reveal delay={0.2}>
        {" "}
        {/* Title with a longer delay */}
        <h1 className="uppercase text-7xl lg:text-9xl tracking-tighter">
          &copy; AISHA ALI STUDIO
        </h1>
      </Reveal>

      <div className="grid gap-y-28">
        {/* Links */}
        <div className="grid gap-x-12 gap-y-24 grid-cols-2 lg:grid-cols-4">
          {FooterLinks.map((section, index) => (
            <Reveal key={index} delay={0.1}>
              {" "}
              {/* Section title with a slight delay */}
              <div className="flex flex-col gap-y-2">
                <PlayFairText>({section.label})</PlayFairText>
                <ul className="list-none grid gap-y-4">
                  {section.links.map((link, linkIndex) => (
                    <Reveal key={linkIndex}>
                      {" "}
                      {/* Each link with no delay */}
                      <li>
                        <Link1
                          href={link.href}
                          className="hover:text-white before:bg-white tracking-wider"
                        >
                          {link.label}
                        </Link1>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <Reveal delay={0.1}>
            {" "}
            {/* Bottom left link with slight delay */}
            <Link2
              href="#"
              className="lg:text-xl hover:text-white before:bg-white"
            >
              Built with ❤️ by Lanre & Sofia
            </Link2>
          </Reveal>

          <Reveal delay={0.1}>
            {" "}
            {/* Bottom right link with slight delay */}
            <Link2
              href="#"
              className="lg:text-xl hover:text-white before:bg-white"
            >
              Back to top
            </Link2>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
