import IMAGES from "@/assets/images";
import Reveal from "../Reveal";
import PlayFairText2 from "../ui/PlayfairText2";

interface Testimonial {
  name: string;
  company: string;
  image: string;
  title: string;
  description: string;
}

const TestimonialsList = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Uchenna Nnodim",
      company: "CEO, Raven Bank",
      image: IMAGES.TESTIMONIALS.RAVEN,
      title: "Seamless Collaboration & Support With Exceptional Results.",
      description:
        "Working with them was easy and efficient. They perfectly captured our vision, and the results were outstanding.",
    },
    {
      name: "Jude Dike",
      company: "CEO, Get Equity",
      image: IMAGES.TESTIMONIALS.GET_EQUITY,
      title: "Innovative Ideas & Professional Execution.",
      description:
        "Their team brought fresh ideas to the table, and their professionalism made the entire process smooth. We're thrilled with the final outcome.",
    },
    {
      name: "Mahmood Oyewo",
      company: "MD, Bracken Media Solutions",
      image: IMAGES.TESTIMONIALS.BRACKEN,
      title: "Attention to Detail & Impeccable Design.",
      description:
        "From start to finish, they paid attention to every little detail. The final design was beyond what we imagined, and we couldn’t be happier.",
    },
    {
      name: "Charles Avackaa",
      company: "Head of media operations at LOOSE Media Limited",
      image: IMAGES.TESTIMONIALS.LOOSE_MEDIA,
      title: "Exceptional Service & Creative Vision.",
      description:
        "Their creativity and service were top-notch. They took our ideas to the next level and delivered a project that surpassed expectations.",
    },
    {
      name: "Ized Uanikhehi",
      company: "CEO, Zedi Africa",
      image: IMAGES.TESTIMONIALS.ZEDI_AFRICA,
      title: "Brilliant Execution & Timely Delivery.",
      description:
        "They delivered exactly what we needed on time and within budget. Their design expertise truly brought our project to life.",
    },
    {
      name: "ADEYINKA ADESOPE",
      company: "CEO, Palton Morgan Holdings",
      image: IMAGES.TESTIMONIALS.GRENADINES,
      title: "Collaborative Team & Stellar Outcomes.",
      description:
        "A fantastic experience from start to finish. The team worked closely with us, and the final product was nothing short of amazing.",
    },
  ];

  return (
    <div className="grid grid-cols-1 auto-rows-fr lg:grid-rows-[600px_600px] lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Reveal
          key={index}
          delay={0.2}
          className="bg-none flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-16 text-left border min-h-[400px]"
        >
          {/* Quote Sign */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
              fill: "rgba(0, 0, 0, 1)",
              transform: "none",
              msFilter: "none",
            }}
            className="w-8 lg:w-12"
          >
            <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
          </svg>

          {/* Text */}
          <div className="grid gap-y-4">
            <p className="text-3xl lg:text-5xl font-futura-medium">
              {testimonial.title}
            </p>
            <p className="text-muted-foreground text-lg lg:text-2xl">
              {testimonial.description}
            </p>
          </div>

          {/* Person */}
          <div className="flex items-center gap-x-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-10 h-10 lg:w-14 lg:h-14 object-cover rounded-full"
            />
            <div className="grid gap-y-1">
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <PlayFairText2>({testimonial.company})</PlayFairText2>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default TestimonialsList;
