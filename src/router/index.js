import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Nosotros from '../views/Nosotros.vue';
import Servicios from '../views/Servicios.vue';
import Proyectos from '../views/Proyectos.vue';
import Contacto from '../views/Contacto.vue';
import ServiceDetails from '../views/ServiceDetails.vue';
import PortfolioSingle from '../views/PortfolioSingle.vue';
import Blog from '../views/Blog.vue';
import Post from '../views/Post.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/nosotros', name: 'nosotros', component: Nosotros },
    { path: '/servicios', name: 'servicios', component: Servicios },
    { path: '/proyectos', name: 'proyectos', component: Proyectos },
    { path: '/contacto', name: 'contacto', component: Contacto },
    { path: '/service-details', name: 'service-details', component: ServiceDetails },
    { path: '/portfolio-single', name: 'portfolio-single', component: PortfolioSingle },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/post', name: 'post', component: Post },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
