import { apiGet } from './api';

let sectionsCache = null;
let projectsCache = null;
const projectCache = new Map();

export const getPortfolioSections = async ({ force = false } = {}) => {
  if (!force && sectionsCache) return sectionsCache;
  try {
    sectionsCache = await apiGet('/api/portfolio/sections');
  } catch (error) {
    console.warn('No se pudieron cargar las secciones del portafolio.', error);
    sectionsCache = null;
  }
  return sectionsCache;
};

export const getPortfolioProjects = async ({ force = false } = {}) => {
  if (!force && projectsCache) return projectsCache;
  try {
    projectsCache = await apiGet('/api/portfolio/projects');
  } catch (error) {
    console.warn('No se pudieron cargar los proyectos del portafolio.', error);
    projectsCache = null;
  }
  return projectsCache;
};

export const getPortfolioProject = async (slug, { force = false } = {}) => {
  if (!slug) return null;
  if (!force && projectCache.has(slug)) return projectCache.get(slug);
  try {
    const project = await apiGet(`/api/portfolio/projects/${slug}`);
    projectCache.set(slug, project);
    return project;
  } catch (error) {
    console.warn('No se pudo cargar el proyecto.', error);
    return null;
  }
};

export const clearPortfolioCache = () => {
  sectionsCache = null;
  projectsCache = null;
  projectCache.clear();
};
