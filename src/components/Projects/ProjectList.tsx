import IMAGES from "@/assets/images";
import Reveal from "../Reveal";

interface Project {
  background: string;
  logo: string;
  name: string;
  date: string;
}

const ProjectList = () => {
  const projects: Project[] = [
    {
      background: IMAGES.PROJECTS.GRENADINES,
      logo: IMAGES.BRANDS.GRENADINES,
      name: "Grenadines Homes",
      date: "2024",
    },
    {
      background: IMAGES.PROJECTS.BRACKEN,
      logo: IMAGES.BRANDS.BRACKEN,
      name: "The Bracken Studios",
      date: "2024",
    },
    {
      background: IMAGES.PROJECTS.RAVEN_BANK,
      logo: IMAGES.BRANDS.RAVEN_BANK,
      name: "Raven Bank",
      date: "2024",
    },
    {
      background: IMAGES.PROJECTS.LOOSE_MEDIA,
      logo: IMAGES.BRANDS.LOOSE_MEDIA,
      name: "Loose Media",
      date: "2024",
    },
  ];

  return (
    <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <a href="#" className="group border-2 project-link cursor-none">
          <Reveal key={project.name} delay={0.2}>
            <div className="grid grid-rows-[1fr_100px] relative overflow-hidden">
              {/* Image */}
              <div className="relative grid content-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <img
                  src={project.background}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 m-auto w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex items-center justify-between p-4 sm:p-5 lg:p-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium truncate">
                  {project.name}
                </h3>
                <p className="font-playfair italic text-muted-foreground text-lg sm:text-xl lg:text-2xl font-light">
                  ({project.date})
                </p>
              </div>
            </div>
          </Reveal>
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
