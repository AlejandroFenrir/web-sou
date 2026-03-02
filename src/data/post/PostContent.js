const data = {
  intro: {
    firstLetter: 'N',
    text: 'Norma chilena de diseno sismico: cambios clave 2026. Revision de derivas, ductilidad y criterios de calculo para proyectos nuevos.'
  },
  quote: {
    text: 'Una buena norma no reemplaza un buen criterio, lo ordena.',
    cite: 'Sebastian Ojeda'
  },
  highlightParagraph:
    'Cambios 2026: control de derivas mas detallado, ductilidad por sistema con bandas claras y criterios de calculo mas exigentes. El ajuste se siente en la definicion temprana de soluciones, en la coordinacion del modelo estructural y en el modo de validar el comportamiento global. La norma busca ordenar criterios y reducir discrepancias entre memorias, modelos y planos.',
  bodyParagraph:
    'En proyectos nuevos, estos ajustes impactan el anteproyecto, la coordinacion de especialidades y la documentacion para revision tecnica. Un buen flujo considera verificacion por etapas, trazabilidad de supuestos y consistencia entre cargas, combinaciones y resultados. El objetivo no es solo cumplir, sino facilitar revisiones, evitar reprocesos y dejar un expediente tecnico claro para la obra y la postventa.',
  heroImage: '/img/post.jpg',
  columns: [
    'La revision 2026 pone enfasis en el control de derivas y en los rangos de ductilidad exigidos por sistema estructural. Esto impacta desde el anteproyecto hasta el desarrollo de especialidades.',
    'Los criterios de calculo actualizados buscan uniformar la verificacion y reducir ambiguedades en la documentacion tecnica, facilitando revisiones y aprobaciones.'
  ],
  gallery: ['/img/post2.jpg', '/img/post3.jpg', '/img/post4.jpg'],
  comment: {
    avatar: '/img/team/2.jpg',
    name: 'Sebastian Ojeda',
    role: 'Autor',
    text: 'Un resumen claro de los ajustes mas relevantes para proyectos nuevos.'
  },
  form: {
    title: 'Deja un comentario',
    fields: [
      { name: 'name', type: 'text', placeholder: 'Tu nombre', iconClass: 'fa-light fa-face-smile', col: 6 },
      { name: 'email', type: 'email', placeholder: 'Tu correo', iconClass: 'fa-light fa-envelope', col: 6 },
      { name: 'message', type: 'textarea', placeholder: 'Mensaje', iconClass: 'fa-light fa-comment', col: 12, rows: 3 }
    ],
    submitText: 'Enviar'
  }
};

export default data;
