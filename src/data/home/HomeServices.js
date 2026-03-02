import servicesCatalog from '../servicios/ServiciosData.js';

const data = {
  sectionLetter: 'S',
  sectionSubtitle: 'Servicios.',
  background: {
    image: '/img/banner2.jpg',
    overlayDark: 3,
  },
  services: servicesCatalog.map((service) => ({
    title: service.title,
    icon: service.home?.icon,
    alt: service.home?.alt,
    link: `/servicios/${service.slug}`,
    description: service.home?.description,
    bullets: service.home?.bullets,
  })),
};

export default data;
