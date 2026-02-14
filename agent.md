# AGENT - SOU / Fase 1 (Web estática HTML)

## Objetivo
Construir la web estática con base en el template existente y la referencia visual entregada (imagen del index). En esta fase trabajaremos imagen por imagen, página por página, dejando todo listo para una migración posterior a Vue con sistema de diseño atómico.

## Inputs
- Template base en `F:\Trabajos\SOU\Ornava`.
- Imagen de referencia: index (último mensaje del usuario).
- Contexto de negocio: ingeniería, inspección, diseño, asesorías, servicios de soldaduras, levantamiento estructural, etc.

## Alcance Fase 1 (HTML)
- Ajustar estructura, textos, colores, tipografías y secciones para que coincidan con el diseño de la imagen.
- Renombrar archivos de páginas a nombres finales (definir mapa).
- Normalizar assets (imágenes, logos, íconos) con nombres consistentes.
- Preparar componentes reutilizables para futura migración a Vue.

## Mapa de páginas (pendiente de confirmación)
- `index.html` -> `index.html` (mantener como home).
- `about.html` -> `nosotros.html` (si se usa).
- `services2.html` -> `servicios.html` (base de servicios).
- `portfolio2.html` -> `proyectos.html` (si se usa).
- `contact.html` -> `contacto.html`.
- Mantener sólo páginas necesarias; eliminar/archivar el resto del template cuando el mapa esté confirmado.

## Index (home) - secciones observadas en la imagen
1. Navbar oscura con logo SOU y links principales (texto en español).
2. Hero con fondo de obra/maqueta, overlay oscuro y título principal.
3. Sección "Desde el diseño hasta la inspección" con texto + CTA + imagen lateral + número/insignia.
4. Grilla de servicios (6 tarjetas) con íconos y descripciones.
5. Bloque destacado "Inspección de soldaduras industriales" con contenido y tarjetas resumen.
6. Carrusel/galería de proyectos destacados (3 tarjetas).
7. Bloque de estadística grande (ej. “+100Mil”) y video/imagen principal.
8. Fila de logos/partners.
9. Sección "Experiencia / Inspección / Diseño" con slider de imágenes.
10. Sección "Te ayudamos a tomar una decisión" con lista/beneficios + imagen.
11. Sección contacto "Conversemos sobre tu proyecto" con formulario.
12. Footer con fondo, logo, datos de contacto y links.

## Cambios globales a aplicar
- Cambiar textos a español y al rubro de ingeniería/inspección.
- Reacomodar secciones según orden de la imagen.
- Ajustar paleta de color a tonos oscuros con acentos:
  - Verde: `#278162`
  - Amarillo/Naranja (acentos): `#FD961E`
- Tipografía: validar si se mantiene `Outfit` o se reemplaza por la fuente del diseño.
- Estilizar botones (CTA) y tarjetas para coincidir con la referencia.
- Simplificar navegación del template (quitar menús y dropdowns innecesarios).
- Ajustar imágenes de fondo y overlays.

## Assets pendientes
- Logo oficial SOU en alta calidad (svg o png).
- Imágenes finales para hero, servicios, proyectos, y bloques visuales.
- Iconografía (servicios y badges) coherente con el diseño.

## Componentes para futura migración a Vue (diseño atómico)
- `Navbar`
- `Hero`
- `SectionHeader` (línea + título + subtítulo)
- `ServiceCard`
- `FeatureCard`
- `ProjectCard`
- `StatBlock`
- `LogoStrip`
- `ImageCarousel`
- `InfoList`
- `ContactForm`
- `Footer`

## Pendientes y preguntas
- Confirmar mapa final de páginas y nombres.
- Confirmar textos definitivos por sección (títulos, descripciones, CTAs).
- Confirmar si habrá multilenguaje o sólo español.
- Definir datos reales de contacto (dirección, email, WhatsApp).
- Confirmar qué servicios van en el home y qué van en página de servicios.

## Estado actual
- `index.html` reestructurado con placeholders `TODO` para textos finos y contenido de tarjetas.
- `css/sou.css` creado con overrides de color y estilos base para las nuevas secciones.
