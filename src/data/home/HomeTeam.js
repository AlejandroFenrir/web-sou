import servicesCatalog from '../servicios/ServiciosData.js';

const data = {
  sectionLetterHtml: 'S<br />O<br />U',
  sectionSubtitle: 'SOU sobre sou.',
  titleHtml: 'Experiencia<br />Inspección<br />Diseño',
  description: 'Cada proyecto es abordado con rigor técnico, ética profesional y cumplimiento normativo.',
  cta: {
    href: '/contacto',
    text: 'Cotizar proyecto',
  },
  slides: servicesCatalog.map((service) => ({
    image: service.image,
    link: `/servicios/${service.slug}`,
    title: service.title,
    subtitle: service.carouselSubtitle || 'Servicio',
  })),
};

export default data;
