const IMAGES = {
  LOGO: new URL("./logo.png", import.meta.url).href,
  INTRO: {
    INTRO_1: new URL("./intro/intro-1.jpg", import.meta.url).href,
    INTRO_2: new URL("./intro/intro-2.jpg", import.meta.url).href,
    INTRO_3: new URL("./intro/intro-3.jpg", import.meta.url).href,
    INTRO_4: new URL("./intro/intro-4.jpg", import.meta.url).href,
    INTRO_5: new URL("./intro/intro-5.jpg", import.meta.url).href,
  },
  BRANDS: {
    GRENADINES: new URL("./brands-logos/grenadines.svg", import.meta.url).href,
    GET_EQUITY: new URL("./brands-logos/get-equity.svg", import.meta.url).href,
    BRACKEN: new URL("./brands-logos/bracken.png", import.meta.url).href,
    LOOSE_MEDIA: new URL("./brands-logos/loose-media.svg", import.meta.url)
      .href,
    RAVEN_BANK: new URL("./brands-logos/raven-bank.svg", import.meta.url).href,
    PALTON_MORGAN: new URL("./brands-logos/palton-morgan.png", import.meta.url)
      .href,
  },
  PROJECTS: {
    GRENADINES: new URL("./projects/grenadines.jpg", import.meta.url).href,
    BRACKEN: new URL("./projects/bracken.jpg", import.meta.url).href,
    LOOSE_MEDIA: new URL("./projects/loose-media.jpg", import.meta.url).href,
    RAVEN_BANK: new URL("./projects/raven-bank.jpg", import.meta.url).href,
  },
  SERVICES: {
    RESIDENTIAL: new URL("./services/residential.jpg", import.meta.url).href,
    COMMERCIAL: new URL("./services/commercial.jpg", import.meta.url).href,
    FURNITURE: new URL("./services/furniture.jpg", import.meta.url).href,
    RENOVATION: new URL("./services/renovation.jpg", import.meta.url).href,
  },
  TESTIMONIALS: {
    RAVEN: new URL("./testimonials/raven.jpg", import.meta.url).href,
    GET_EQUITY: new URL("./testimonials/get-equity.webp", import.meta.url).href,
    BRACKEN: new URL("./testimonials/bracken.jpeg", import.meta.url).href,
    LOOSE_MEDIA: new URL("./testimonials/loose-media.jpeg", import.meta.url)
      .href,
    ZEDI_AFRICA: new URL("./testimonials/zedi-africa.jpg", import.meta.url)
      .href,
    GRENADINES: new URL("./testimonials/grenadines.png", import.meta.url).href,
  },
};

export default IMAGES;
