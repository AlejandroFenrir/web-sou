import servicesCatalog from './ServiciosData.js';

const data = {
  services: servicesCatalog.map((service) => ({
    image: service.image,
    iconClass: service.iconClass,
    link: `/servicios/${service.slug}`,
    title: service.title,
    description: service.short,
  })),
};

export default data;
