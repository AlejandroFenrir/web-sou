const data = {
  intro: {
    firstLetter: 'T',
    text: 'The living room is the heart of every home, a space where functionality and beauty come together in perfect balance. In this project, modern design principles meet timeless comfort, creating an inviting atmosphere that reflects both sophistication and warmth.'
  },
  quote: {
    text: 'Simplicity is the ultimate sophistication.',
    cite: 'Leonardo da Vinci'
  },
  heroImage: '/img/post.jpg',
  columns: [
    'Soft neutral tones, natural textures, and carefully curated furniture pieces define the visual language of the interior. Every element from the lighting arrangement to the choice of fabrics has been thoughtfully selected to enhance spatial harmony and flow.',
    'The design emphasizes openness, allowing light to move freely and connect indoors with the environment. The result is a serene, elegant living space that encourages relaxation, conversation and meaningful moments a true reflection of modern living aesthetics.'
  ],
  gallery: ['/img/post2.jpg', '/img/post3.jpg', '/img/post4.jpg'],
  comment: {
    avatar: '/img/team/2.jpg',
    name: 'Emily Brown',
    role: 'Design Lover',
    text: 'Such a beautifully balanced space that feels calm, elegant, and truly inspiring'
  },
  form: {
    title: 'Leave a Reply',
    fields: [
      { name: 'name', type: 'text', placeholder: 'Your name', iconClass: 'fa-light fa-face-smile', col: 6 },
      { name: 'email', type: 'email', placeholder: 'Your email', iconClass: 'fa-light fa-envelope', col: 6 },
      { name: 'message', type: 'textarea', placeholder: 'Message', iconClass: 'fa-light fa-comment', col: 12, rows: 3 }
    ],
    submitText: 'Submit'
  }
};

export default data;
