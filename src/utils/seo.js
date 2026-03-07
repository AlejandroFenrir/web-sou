const SITE_NAME = 'SOU Ingeniería e Inspección';
const DEFAULT_SITE_URL = 'https://app.souingenieria.cl';
const DEFAULT_IMAGE = '/img/01.jpg';
const DEFAULT_DESCRIPTION =
  'SOU desarrolla ingeniería estructural, inspección técnica de obras, BIM, asesorías, ingeniería sanitaria y levantamiento estructural.';

const staticRouteSeo = {
  home: () => ({
    title: `${SITE_NAME} | Ingeniería estructural, ITO y BIM`,
    description:
      'Servicios de ingeniería estructural, inspección técnica de obras, modelación BIM, asesorías e ingeniería sanitaria para proyectos habitacionales, comerciales e industriales.',
    image: '/img/01.jpg',
    structuredData: [buildOrganizationSchema(), buildWebsiteSchema()],
  }),
  nosotros: () => ({
    title: `Nosotros | ${SITE_NAME}`,
    description:
      'Conoce a SOU, nuestro enfoque técnico y la experiencia del equipo en diseño, inspección y evaluación de proyectos.',
    image: '/img/about.jpg',
  }),
  servicios: () => ({
    title: `Servicios | ${SITE_NAME}`,
    description:
      'Explora los servicios de SOU: ingeniería estructural, inspección técnica, BIM, asesorías, ingeniería sanitaria y levantamiento estructural.',
    image: '/img/services/01.jpg',
  }),
  'service-details': () => ({
    title: `Servicio | ${SITE_NAME}`,
    description: 'Detalle del servicio técnico de SOU.',
    image: '/img/services/01.jpg',
  }),
  proyectos: () => ({
    title: `Proyectos | ${SITE_NAME}`,
    description:
      'Revisa proyectos de ingeniería e inspección desarrollados por SOU en estructuras, vivienda, industria y equipamiento.',
    image: '/img/banner.jpg',
  }),
  portfolio: () => ({
    title: `Proyecto | ${SITE_NAME}`,
    description: 'Detalle de proyecto desarrollado por SOU.',
    image: '/img/banner.jpg',
  }),
  contacto: () => ({
    title: `Contacto | ${SITE_NAME}`,
    description:
      'Contacta a SOU para cotizar servicios de ingeniería estructural, inspección técnica, BIM y asesorías.',
    image: '/img/banner.jpg',
  }),
  blog: () => ({
    title: `Blog | ${SITE_NAME}`,
    description: 'Artículos y novedades de SOU sobre ingeniería, obra e inspección.',
    image: '/img/09.jpg',
    noindex: true,
  }),
  post: () => ({
    title: `Artículo | ${SITE_NAME}`,
    description: 'Lectura técnica y contenidos de SOU.',
    image: '/img/09.jpg',
    noindex: true,
  }),
  'not-found': () => ({
    title: `Página no encontrada | ${SITE_NAME}`,
    description: 'La URL solicitada no existe o fue movida.',
    noindex: true,
  }),
};

function getSiteUrl() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }

  return import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL;
}

function toAbsoluteUrl(value = '/') {
  if (!value) return getSiteUrl();

  try {
    return new URL(value, getSiteUrl()).toString();
  } catch {
    return value;
  }
}

function stripHtml(value = '') {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function ensureMeta(selector, attributes) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }

  return tag;
}

function setMetaName(name, content) {
  const existing = document.head.querySelector(`meta[name="${name}"]`);

  if (!content) {
    existing?.remove();
    return;
  }

  const tag = ensureMeta(`meta[name="${name}"]`, { name });
  tag.setAttribute('content', content);
}

function setMetaProperty(property, content) {
  const existing = document.head.querySelector(`meta[property="${property}"]`);

  if (!content) {
    existing?.remove();
    return;
  }

  const tag = ensureMeta(`meta[property="${property}"]`, { property });
  tag.setAttribute('content', content);
}

function setCanonical(href) {
  const existing = document.head.querySelector('link[rel="canonical"]');

  if (!href) {
    existing?.remove();
    return;
  }

  let link = existing;

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

function clearManagedStructuredData() {
  document.head
    .querySelectorAll('script[data-sou-seo="true"]')
    .forEach((script) => script.remove());
}

function setStructuredData(entries = []) {
  clearManagedStructuredData();

  entries
    .filter(Boolean)
    .forEach((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.souSeo = 'true';
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: getSiteUrl(),
    logo: toAbsoluteUrl('/img/icon.png'),
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: getSiteUrl(),
  };
}

export function buildBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description: stripHtml(description),
    url: toAbsoluteUrl(path),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function buildWebPageSchema({ name, description, path, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description: stripHtml(description),
    url: toAbsoluteUrl(path),
    ...(image ? { primaryImageOfPage: toAbsoluteUrl(image) } : {}),
  };
}

export function getRouteSeo(routeName) {
  const resolver = staticRouteSeo[routeName];
  return resolver ? resolver() : null;
}

export function applySeo({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  path,
  canonical,
  type = 'website',
  noindex = false,
  structuredData = [],
} = {}) {
  const sanitizedDescription = stripHtml(description) || DEFAULT_DESCRIPTION;
  const resolvedPath =
    path ??
    (typeof window !== 'undefined'
      ? `${window.location.pathname}${window.location.search}`
      : '/');
  const url = toAbsoluteUrl(resolvedPath);
  const absoluteImage = image ? toAbsoluteUrl(image) : null;

  document.title = title;

  setMetaName('description', sanitizedDescription);
  setMetaName('robots', noindex ? 'noindex, nofollow' : 'index, follow');
  setMetaProperty('og:locale', 'es_CL');
  setMetaProperty('og:site_name', SITE_NAME);
  setMetaProperty('og:title', title);
  setMetaProperty('og:description', sanitizedDescription);
  setMetaProperty('og:type', type);
  setMetaProperty('og:url', url);
  setMetaProperty('og:image', absoluteImage);
  setMetaName('twitter:card', absoluteImage ? 'summary_large_image' : 'summary');
  setMetaName('twitter:title', title);
  setMetaName('twitter:description', sanitizedDescription);
  setMetaName('twitter:image', absoluteImage);
  setCanonical(canonical ? toAbsoluteUrl(canonical) : url);
  setStructuredData(structuredData);
}
