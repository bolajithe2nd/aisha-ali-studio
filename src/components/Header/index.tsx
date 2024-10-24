import { useEffect, useState, useCallback } from "react";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import IMAGES from "@/assets/images";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlHeader = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [controlHeader]);

  return (
    <header
      className={`bg-background/60 backdrop-blur-md grid content-center fixed top-0 w-full border-b z-20 md:bg-background transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-[6.5rem] flex items-center justify-between h-16 sm:h-18 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1">
          <img src={IMAGES.LOGO} className="w-8 sm:w-9 md:w-10" alt="Logo" />
          <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-futura-medium">
            isha Ali Studio
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-8">
          <Navigation />
          <div className="relative">
            <Button className="py-4 md:py-6 px-6 md:px-8 text-lg md:text-2xl transition-all duration-300 ease-in-out rounded-none hover:text-white font-futura-medium">
              <a href="mailto:thesportysofia@gmail.com">Let's Talk!</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-none lg:hidden transition-all duration-700 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-y-6">
          <Navigation mobile />
          <Button className="py-5 px-7 text-lg transition-all duration-300 ease-in-out rounded-none hover:text-white font-futura-medium w-full">
            <a href="mailto:thesportysofia@gmail.com">Let's Talk!</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
