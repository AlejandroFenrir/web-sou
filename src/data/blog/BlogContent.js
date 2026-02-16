const data = {
  posts: [
    {
      image: '/img/07.jpg',
      title: 'Modern Bathroom Details',
      excerpt: 'Soft lighting and clean materials define a calm, contemporary bathroom atmosphere.',
      date: '29 Apr 2026',
      author: 'Martin Dan',
      link: '/post'
    },
    {
      image: '/img/02.jpg',
      title: 'Coastal Villa Project',
      excerpt: 'Bright interiors meet ocean views, blending luxury with natural seaside charm.',
      date: '27 Apr 2026',
      author: 'Micheal White',
      link: '/post'
    },
    {
      image: '/img/08.jpg',
      title: 'Functional Kitchen Design',
      excerpt: 'Smart organization, elegant materials, and lighting enhance everyday cooking experiences.',
      date: '25 Apr 2026',
      author: 'Emily Brown',
      link: '/post'
    },
    {
      image: '/img/04.jpg',
      title: 'Luxury Living Inspirations',
      excerpt: 'Sophisticated textures and tones bring timeless harmony to modern living spaces.',
      date: '23 Apr 2026',
      author: 'Frank White',
      link: '/post'
    },
    {
      image: '/img/03.jpg',
      title: 'Hillside Villa Architecture',
      excerpt: 'Modern structure blends seamlessly with natural hillside landscape.',
      date: '21 Apr 2026',
      author: 'Olivia Dan',
      link: '/post'
    },
    {
      image: '/img/09.jpg',
      title: 'Living Room Aesthetics',
      excerpt: 'Balanced proportions and warm textures create inviting, elegant living environments.',
      date: '20 Apr 2026',
      author: 'Arla Brown',
      link: '/post'
    }
  ],
  pagination: [
    { href: '/blog', iconClass: 'fa-light fa-angle-left' },
    { href: '/blog', label: '1' },
    { href: '/blog', label: '2', active: true },
    { href: '/blog', label: '3' },
    { href: '/blog', iconClass: 'fa-light fa-angle-right' }
  ],
  sidebar: {
    searchPlaceholder: 'Type here ...',
    recentPosts: [
      { image: '/img/09.jpg', title: 'Living Room Aesthetics', link: '/post' },
      { image: '/img/03.jpg', title: 'Hillside Villa Architecture', link: '/post' },
      { image: '/img/04.jpg', title: 'Luxury Living Inspirations', link: '/post' }
    ],
    archives: ['December 2026', 'November 2026', 'October 2026'],
    categories: ['Interior design', 'Architecture', 'Exterior design'],
    tags: ['Interior', 'Design', 'Art', 'Architecture', 'Lighting']
  }
};

export default data;
