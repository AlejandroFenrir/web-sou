const data = {
  logo: {
    href: '/',
    src: '/img/logo-dark.svg',
    alt: 'SOU'
  },
  togglerIconClass: 'ti-menu',
  links: [
    { label: 'Inicio', href: '/', type: 'route' },
    { label: 'Nosotros', href: '/nosotros', type: 'route' },
    { label: 'Servicios', href: '/servicios', type: 'route' },
    { label: 'Proyectos', href: '/proyectos', type: 'route' },
    { label: 'Contacto', href: '/contacto', type: 'route' },
    {
      label: 'Zona Sísmica',
      href: 'https://www.dlubal.com/es/zonas-de-cargas-para-nieve-viento-y-sismos/terremoto-nch-433.html?srsltid=AfmBOoqstW7tPvgLVJ7ZTvDldBhT4tVW5VPcWRwpDaI2QxPZeFe3nOLi#&center=-40.380028402511826,-73.56445312500001&zoom=5&marker=-41.2575704,-73.0047428',
      type: 'external',
      target: '_blank',
      rel: 'noopener'
    }
  ]
};

export default data;
