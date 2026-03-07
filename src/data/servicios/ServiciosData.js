const services = [
  {
    slug: 'ingenieria-estructural',
    title: 'Ingeniería estructural',
    short:
      'Proyectos estructurales en hormigón armado, albañilería, acero y madera.<br /><br />',
    image: '/img/services/home-01.jpg',
    iconClass: 'flaticon-houses',
    carouselSubtitle: 'Estructuras',
    home: {
      icon: '/img/iconos/01.svg',
      alt: 'Ingenieria estructural',
      description:
        'Proyectos estructurales en hormigón armado, albañilería, acero y madera.',
    },
    banner: {
      title: 'Ingeniería estructural',
      background: '/img/services/01.jpg',
      overlayDark: 5,
    },
    intro: {
      letter: 'IE',
      intro:
        'Diseñamos estructuras seguras y eficientes, con un enfoque sismo-resistente y un desarrollo técnico que considera cada etapa del proyecto. Nuestro trabajo integra cálculo, coordinación y especificaciones claras para construir con confianza.',
      quote: {
        text: 'La estructura correcta es la que sostiene sin hacerse notar.',
        cite: 'Equipo SOU',
      },
    },
    gallery: {
      images: [
        '/img/galleryscroll/01.jpg',
        '/img/galleryscroll/02.jpg',
        '/img/galleryscroll/03.jpg',
        '/img/galleryscroll/04.jpg',
        '/img/galleryscroll/05.jpg',
        '/img/galleryscroll/06.jpg',
      ],
    },
    info: {
      scopeTitle: 'Alcance del servicio',
      scope: [
        'Modelación y análisis estructural con criterios sismo-resistentes.',
        'Planos estructurales, memorias de cálculo y especificaciones técnicas.',
        'Optimización de secciones y materiales para eficiencia de obra.',
        'Coordinación técnica con arquitectura e instalaciones.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Qué necesito para iniciar un proyecto estructural?',
          answer:
            'Arquitectura preliminar, programa de necesidades y ubicación del proyecto. Con eso podemos definir alcance y tiempos.',
        },
        {
          question: '¿Entregan planimetría y memoria de cálculo?',
          answer:
            'Sí, entregamos planos estructurales, memoria de cálculo y especificaciones técnicas completas.',
        },
        {
          question: '¿Trabajan con proyectos industriales y habitacionales?',
          answer:
            'Sí, desarrollamos soluciones para vivienda, comercio e industria con criterios normativos.',
        },
      ],
    },
  },
  {
    slug: 'inspeccion-tecnica-de-obras',
    title: 'Inspección técnica de obras',
    short:
      'Control del fiel cumplimiento de la ejecución de obras, plazos, calidad, avance físico y financiero.',
    image: '/img/services/home-02.jpg',
    iconClass: 'flaticon-living-room',
    carouselSubtitle: 'Inspección',
    home: {
      icon: '/img/iconos/02.svg',
      alt: 'Inspeccion tecnica de obras',
      description:
        'Control del fiel cumplimiento de la ejecución de obras, plazos, calidad, avance físico y financiero.',
    },
    banner: {
      title: 'Inspección técnica de obras',
      background: '/img/services/02.jpg',
      overlayDark: 6,
    },
    intro: {
      letter: 'IO',
      intro:
        'Supervisamos la ejecución en terreno asegurando calidad, seguridad y cumplimiento contractual. Aplicamos protocolos de inspección, control de avances y reportes claros para la toma de decisiones.',
      quote: {
        text: 'La buena obra se construye con control y trazabilidad.',
        cite: 'SOU Inspección',
      },
    },
    gallery: {
      images: [
        '/img/galleryscroll/02.jpg',
        '/img/galleryscroll/03.jpg',
        '/img/galleryscroll/04.jpg',
        '/img/galleryscroll/05.jpg',
        '/img/galleryscroll/06.jpg',
        '/img/galleryscroll/01.jpg',
      ],
    },
    info: {
      scopeTitle: 'Alcance del servicio',
      scope: [
        'Plan de inspección y checklists por partidas.',
        'Control de calidad y cumplimiento normativo en terreno.',
        'Reportes de avance físico y financiero.',
        'Gestión de observaciones y cierre de no conformidades.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Con qué frecuencia realizan visitas a obra?',
          answer:
            'Definimos la frecuencia según el programa y el nivel de riesgo de cada partida.',
        },
        {
          question: '¿Entregan reportes periódicos?',
          answer:
            'Sí, entregamos reportes semanales o quincenales con hallazgos y avances.',
        },
        {
          question: '¿Pueden apoyar en recepción final?',
          answer:
            'Sí, revisamos terminaciones, documentación y cumplimiento para la recepción.',
        },
      ],
    },
  },
  {
    slug: 'modelacion-y-revision-bim',
    title: 'Modelación y revisión BIM',
    short:
      'Modelación 3D, revisión de interferencias entre especialidades y optimización de costos y plazos de proyecto.',
    image: '/img/services/home-03.jpg',
    iconClass: 'flaticon-interior-design',
    carouselSubtitle: 'BIM',
    home: {
      icon: '/img/iconos/03.svg',
      alt: 'Modelacion y revision BIM',
      description:
        'Modelación 3D, revisión de interferencias y optimización de costos y plazos de proyecto.',
    },
    banner: {
      title: 'Modelación y revisión BIM',
      background: '/img/services/03.jpg',
      overlayDark: 6,
    },
    intro: {
      letter: 'MR',
      intro:
        'Coordinamos modelos BIM para anticipar interferencias, mejorar la constructibilidad y reducir reprocesos. Integramos arquitectura, estructura e instalaciones con criterios claros de coordinación.',
      quote: {
        text: 'Coordinar antes de construir es ahorrar en obra.',
        cite: 'SOU BIM',
      },
    },
    gallery: {
      images: [
        '/img/galleryscroll/03.jpg',
        '/img/galleryscroll/04.jpg',
        '/img/galleryscroll/05.jpg',
        '/img/galleryscroll/06.jpg',
        '/img/galleryscroll/01.jpg',
        '/img/galleryscroll/02.jpg',
      ],
    },
    info: {
      scopeTitle: 'Alcance del servicio',
      scope: [
        'Modelación BIM por especialidad con estándares LOD.',
        'Detección de interferencias y reporte de clashes.',
        'Reuniones de coordinación y seguimiento de soluciones.',
        'Extracción de metrados y apoyo a planificación.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Qué software utilizan para BIM?',
          answer:
            'Trabajamos con herramientas estándar del mercado según el requerimiento del cliente.',
        },
        {
          question: '¿Pueden coordinar modelos existentes?',
          answer:
            'Sí, revisamos modelos entregados y generamos reportes de interferencias.',
        },
        {
          question: '¿Incluyen protocolos de nomenclatura?',
          answer:
            'Sí, definimos convenciones para facilitar el trabajo colaborativo.',
        },
      ],
    },
  },
  {
    slug: 'asesorias',
    title: 'Asesorías',
    short:
      'Estudio, cubicación y presupuesto de proyectos. Regularización de edificaciones<br /><br />',
    image: '/img/services/home-04.jpg',
    iconClass: 'flaticon-medieval-house',
    carouselSubtitle: 'Asesorías',
    home: {
      icon: '/img/iconos/04.svg',
      alt: 'Asesorias',
      bullets: [
        'Estudio, cubicación y presupuesto de proyectos',
        'Regularización de edificaciones',
      ],
    },
    banner: {
      title: 'Asesorías',
      background: '/img/services/04.jpg',
      overlayDark: 7,
    },
    intro: {
      letter: 'A',
      intro:
        'Brindamos apoyo técnico en decisiones clave: presupuestos, cubicaciones, evaluación de alternativas y regularizaciones. Nuestro foco es la viabilidad técnica y económica del proyecto.',
      quote: {
        text: 'Un buen diagnóstico evita costos innecesarios.',
        cite: 'SOU Asesorías',
      },
    },
    gallery: {
      images: [
        '/img/galleryscroll/04.jpg',
        '/img/galleryscroll/05.jpg',
        '/img/galleryscroll/06.jpg',
        '/img/galleryscroll/01.jpg',
        '/img/galleryscroll/02.jpg',
        '/img/galleryscroll/03.jpg',
      ],
    },
    info: {
      scopeTitle: 'Alcance del servicio',
      scope: [
        'Cubicaciones y presupuestos detallados.',
        'Evaluación técnica de alternativas constructivas.',
        'Regularización de edificaciones y apoyo documental.',
        'Asesoría en licitaciones y bases técnicas.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Pueden revisar presupuestos existentes?',
          answer:
            'Sí, auditamos y proponemos ajustes para mejorar la precisión del costo.',
        },
        {
          question: '¿Incluye visitas a terreno?',
          answer:
            'Cuando es necesario, realizamos inspecciones para levantar información.',
        },
        {
          question: '¿Apoyan procesos de regularización?',
          answer:
            'Sí, acompañamos la regularización técnica y la documentación requerida.',
        },
      ],
    },
  },
  {
    slug: 'ingenieria-sanitaria',
    title: 'Ingeniería sanitaria',
    short:
      'Proyectos de instalaciones domiciliarias de agua potable y alcantarillado urbano y rural.<br /><br />',
    image: '/img/services/home-05.jpg',
    iconClass: 'flaticon-kitchen',
    carouselSubtitle: 'Sanitaria',
    home: {
      icon: '/img/iconos/05.svg',
      alt: 'Ingenieria sanitaria',
      description:
        'Proyectos de instalaciones domiciliarias de agua potable y alcantarillado urbano y rural.',
    },
    banner: {
      title: 'Ingeniería sanitaria',
      background: '/img/services/05.jpg',
      overlayDark: 6,
    },
    intro: {
      letter: 'IS',
      intro:
        'Diseñamos redes de agua potable y alcantarillado, considerando normativas vigentes, eficiencia hidráulica y facilidad de mantención. Coordinamos con especialidades para una ejecución limpia.',
      quote: {
        text: 'El agua bien diseñada es salud y continuidad operativa.',
        cite: 'SOU Sanitaria',
      },
    },
    gallery: {
      images: [
        '/img/galleryscroll/05.jpg',
        '/img/galleryscroll/06.jpg',
        '/img/galleryscroll/01.jpg',
        '/img/galleryscroll/02.jpg',
        '/img/galleryscroll/03.jpg',
        '/img/galleryscroll/04.jpg',
      ],
    },
    info: {
      scopeTitle: 'Alcance del servicio',
      scope: [
        'Diseño de redes de agua potable y alcantarillado.',
        'Cálculo de caudales, presiones y diámetros.',
        'Planos de instalaciones sanitarias y memorias.',
        'Coordinación con arquitectura y especialidades.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Trabajan con proyectos urbanos y rurales?',
          answer:
            'Sí, abordamos soluciones sanitarias para distintos contextos y escalas.',
        },
        {
          question: '¿Incluyen soluciones para APR?',
          answer:
            'Podemos diseñar soluciones compatibles con APR según requerimientos.',
        },
        {
          question: '¿Qué normativa utilizan?',
          answer:
            'Aplicamos normativa local vigente y buenas prácticas de ingeniería.',
        },
      ],
    },
  },
  {
    slug: 'levantamiento-estructural',
    title: 'Levantamiento estructural',
    short:
      'Escáner de armaduras, medición de espesores de perfiles. Plan de ensayos para evaluación estructural',
    image: '/img/services/home-06.jpg',
    iconClass: 'flaticon-bathtub',
    carouselSubtitle: 'Levantamiento',
    home: {
      icon: '/img/iconos/06.svg',
      alt: 'Levantamiento estructural',
      description:
        'Escáner de armaduras, medición de espesores de perfiles. Plan de ensayos para evaluación estructural.',
    },
    banner: {
      title: 'Levantamiento estructural',
      background: '/img/services/06.jpg',
      overlayDark: 6,
    },
    intro: {
      letter: 'LE',
      intro:
        'Levantamos información estructural en terreno para diagnósticos, regularizaciones o ampliaciones. Usamos herramientas de medición y ensayos que entregan datos confiables.',
      quote: {
        text: 'Medir bien hoy evita sorpresas mañana.',
        cite: 'SOU Levantamiento',
      },
    },
    gallery: {
      images: [
        '/img/galleryscroll/06.jpg',
        '/img/galleryscroll/01.jpg',
        '/img/galleryscroll/02.jpg',
        '/img/galleryscroll/03.jpg',
        '/img/galleryscroll/04.jpg',
        '/img/galleryscroll/05.jpg',
      ],
    },
    info: {
      scopeTitle: 'Alcance del servicio',
      scope: [
        'Levantamiento dimensional y fotográfico en terreno.',
        'Escáner de armaduras y detección de elementos embebidos.',
        'Medición de espesores y evaluación preliminar.',
        'Informe técnico con recomendaciones.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿En qué casos se necesita un levantamiento?',
          answer:
            'En ampliaciones, regularizaciones o evaluación de estructuras existentes.',
        },
        {
          question: '¿Incluye ensayos en laboratorio?',
          answer:
            'Podemos coordinar ensayos específicos según el tipo de estructura.',
        },
        {
          question: '¿Entregan planos del levantamiento?',
          answer:
            'Sí, entregamos planos y reportes con la información obtenida.',
        },
      ],
    },
  },
  {
    slug: 'recepcion-sellos-fundacion',
    title: 'Recepción de sellos de fundación',
    short:
      'Servicio independiente que verifica que el suelo real coincida con el estudio mecánico de suelos y autoriza el inicio de fundaciones.',
    image: '/img/services/home-07.jpg',
    iconClass: 'flaticon-living-room',
    carouselSubtitle: 'Fundaciones',
    home: {
      icon: '/img/iconos/02.svg',
      alt: 'Recepción de sellos de fundación',
      description:
        'Verificación en terreno del suelo real, contraste con el estudio mecánico de suelos y autorización del inicio de fundaciones.',
    },
    banner: {
      title: 'Recepción de sellos de fundación',
      background: '/img/services/07.jpg',
      overlayDark: 6,
    },
    intro: {
      letter: 'RF',
      intro:
        'Revisamos el sello de fundación para asegurar que el terreno real cumpla con el estudio mecánico de suelos y las condiciones de diseño. Emitimos observaciones y autorizamos el inicio de las fundaciones cuando corresponde.',
      quote: {
        text: 'Un buen sello asegura el desempeño de toda la obra.',
        cite: 'SOU Fundaciones',
      },
    },
    gallery: {
      images: [
        '/img/galleryscroll/01.jpg',
        '/img/galleryscroll/02.jpg',
        '/img/galleryscroll/03.jpg',
        '/img/galleryscroll/04.jpg',
        '/img/galleryscroll/05.jpg',
        '/img/galleryscroll/06.jpg',
      ],
    },
    info: {
      scopeTitle: 'Alcance del servicio',
      scope: [
        'Revisión del estudio mecánico de suelos y criterios de diseño de fundaciones.',
        'Inspección en terreno del sello de fundación y condición del suelo real.',
        'Registro fotográfico, evidencias y reporte técnico de conformidad.',
        'Autorización de inicio de fundaciones o recomendaciones correctivas.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Este servicio reemplaza a la ITO completa?',
          answer:
            'No, es un servicio independiente enfocado solo en la recepción del sello de fundación.',
        },
        {
          question: '¿En qué momento se realiza la recepción?',
          answer:
            'Se realiza antes del hormigonado, para validar el terreno real y el sello de fundación.',
        },
        {
          question: '¿Qué entregables incluyen?',
          answer:
            'Acta de recepción, registro fotográfico y recomendaciones técnicas cuando aplica.',
        },
      ],
    },
  },
];

export const getServices = () => services;

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);

export default services;
