const data = {
  title: 'Conversemos',
  formFields: [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nombre',
      iconClass: 'fa-light fa-face-smile',
      col: 6
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Correo electrónico',
      iconClass: 'fa-light fa-envelope',
      col: 6
    },
    {
      name: 'subject',
      type: 'text',
      placeholder: 'Asunto',
      iconClass: 'fa-light fa-book',
      col: 12
    },
    {
      name: 'message',
      type: 'textarea',
      placeholder: 'Mensaje',
      iconClass: 'fa-light fa-comment',
      col: 12,
      rows: 3
    }
  ],
  submitText: 'Enviar mensaje'
};

export default data;
