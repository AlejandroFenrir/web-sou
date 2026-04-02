const data = {
  background: {
    image: '/img/footer.jpg',
    overlayDark: 2
  },
  brand: {
    logo: '/img/logo-dark.svg',
    description: 'SOU Ingeniería e Inspección SpA\nIngeniería estructural, sanitaria, inspección de obras y asesorías Sur de Chile',
    social: [
      { href: 'https://www.instagram.com', iconClass: 'fa-brands fa-instagram' },
      { href: 'https://www.instagram.com', iconClass: 'fab fa-x-twitter' },
      { href: 'https://www.instagram.com', iconClass: 'fa-brands fa-facebook-f' }
    ]
  },
  contact: {
    title: 'Hablemos',
    location: 'Puerto Montt',
    phone: '+56 9 9782 9016',
    phoneHref: 'tel:+56997829016',
    email: 's.ojeda@souingenieria.cl',
    emailHref: 'mailto:s.ojeda@souingenieria.cl'
  },
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
  ],
  copyright: 'Copyright 2026 by SOU'
};

export default data;
