import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import services from '../src/data/servicios/ServiciosData.js';

function readEnvValue(key) {
  const envPath = resolve('.env.production');

  try {
    const content = readFileSync(envPath, 'utf8');
    const line = content
      .split(/\r?\n/)
      .find((entry) => entry.trim().startsWith(`${key}=`));

    if (!line) return null;

    return line.slice(line.indexOf('=') + 1).trim().replace(/^['"]|['"]$/g, '');
  } catch {
    return null;
  }
}

const siteUrl = readEnvValue('VITE_SITE_URL') || 'https://app.souingenieria.cl';
const apiUrl = readEnvValue('VITE_API_URL') || 'https://admin.souingenieria.cl';
const today = new Date().toISOString().split('T')[0];

const staticRoutes = ['/', '/nosotros', '/servicios', '/proyectos', '/contacto'];
const serviceRoutes = services.map((service) => `/servicios/${service.slug}`);

async function getProjectRoutes() {
  try {
    const response = await fetch(`${apiUrl}/api/portfolio/projects`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const projects = await response.json();
    return projects.map((project) => `/proyectos/${project.slug}`);
  } catch (error) {
    console.warn('No se pudieron obtener los proyectos para el sitemap.', error.message);
    return [];
  }
}

function buildUrlEntry(path) {
  return [
    '  <url>',
    `    <loc>${new URL(path, siteUrl).toString()}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    '  </url>',
  ].join('\n');
}

async function generateSitemap() {
  const projectRoutes = await getProjectRoutes();
  const routes = [...new Set([...staticRoutes, ...serviceRoutes, ...projectRoutes])];
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(buildUrlEntry),
    '</urlset>',
    '',
  ].join('\n');

  writeFileSync(resolve('dist', 'sitemap.xml'), xml, 'utf8');
  console.log(`Generated sitemap.xml with ${routes.length} URLs`);
}

generateSitemap();
