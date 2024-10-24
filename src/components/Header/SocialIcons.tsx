import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="">
      <div className="flex items-center gap-x-6">
        <a
          href="https://instagram.com"
          className="hover:bg-white cursor-pointer bg-background/30 bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <Instagram className="w-5" />
        </a>
        <a
          href="https://linkedin.com"
          className="hover:bg-white cursor-pointer bg-background/30 bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <Linkedin className="w-5" />
        </a>
        <a
          href="https://youtube.com"
          className="hover:bg-white cursor-pointer bg-background/30 bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <Youtube className="w-5" />
        </a>
        <a
          href="https://youtube.com"
          className="hover:bg-white cursor-pointer bg-background/30 bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <Twitter className="w-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
