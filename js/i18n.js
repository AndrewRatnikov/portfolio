// Translation strings and project data, keyed by language.
// Add a new project by pushing an object onto both PROJECTS.en and PROJECTS.es (same order/id).
const I18N = {
  en: {
    "meta.title": "Andrew Ratnikov — Full-Stack Developer, AI Automations & Custom Integrations",
    "meta.description": "Andrew Ratnikov builds custom AI automations and integrations for businesses that have outgrown no-code tools like Make and n8n.",
    "nav.skip": "Skip to content",
    "nav.name": "Andrew Ratnikov",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.headline": "Full-stack development for AI automations and integrations no-code tools can't handle.",
    "hero.sub": "When Make or n8n hits a wall, I build the custom fix in Node, Python, or whatever the job needs.",
    "hero.cta": "Email me",
    "services.heading": "Services",
    "services.automation.title": "AI automations",
    "services.automation.desc": "Custom workflows that use AI to handle tasks generic automation platforms can't — from data processing to intelligent decision-making.",
    "services.rescue.title": "No-code integration rescue",
    "services.rescue.desc": "When Make or n8n can't reach a system or hits a hard limit, I build the missing piece with custom code that plugs back into your existing setup.",
    "services.fullstack.title": "Full-stack development",
    "services.fullstack.desc": "End-to-end web application development — backend services, APIs, and the front end that ties it together.",
    "projects.heading": "Projects",
    "projects.intro": "A selection of pet projects, updated as new ones ship.",
    "about.heading": "About",
    "about.body": "I'm Andrew Ratnikov, a full-stack developer who works with businesses to build the custom automations and integrations that off-the-shelf and no-code tools don't cover. I care about shipping things that work reliably, not just demos.",
    "contact.heading": "Contact",
    "contact.cta": "ratnikov.am@gmail.com",
    "footer.copyright": "© 2026 Andrew Ratnikov"
  },
  es: {
    "meta.title": "Andrew Ratnikov — Desarrollador Full-Stack, Automatizaciones con IA e Integraciones a Medida",
    "meta.description": "Andrew Ratnikov crea automatizaciones con IA e integraciones a medida para empresas que han superado los límites de herramientas no-code como Make y n8n.",
    "nav.skip": "Saltar al contenido",
    "nav.name": "Andrew Ratnikov",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "hero.headline": "Desarrollo full-stack para automatizaciones e integraciones con IA que las herramientas no-code no pueden resolver.",
    "hero.sub": "Cuando Make o n8n llegan a su límite, construyo la solución a medida en Node, Python o lo que el proyecto requiera.",
    "hero.cta": "Escríbeme",
    "services.heading": "Servicios",
    "services.automation.title": "Automatizaciones con IA",
    "services.automation.desc": "Flujos de trabajo a medida que usan IA para tareas que las plataformas de automatización genéricas no pueden manejar, desde procesamiento de datos hasta toma de decisiones inteligente.",
    "services.rescue.title": "Rescate de integraciones no-code",
    "services.rescue.desc": "Cuando Make o n8n no pueden conectar con un sistema o llegan a un límite, construyo la pieza que falta con código a medida que se integra con tu configuración actual.",
    "services.fullstack.title": "Desarrollo full-stack",
    "services.fullstack.desc": "Desarrollo de aplicaciones web de principio a fin: servicios backend, APIs y el frontend que lo conecta todo.",
    "projects.heading": "Proyectos",
    "projects.intro": "Una selección de proyectos personales, que se actualiza a medida que salen nuevos.",
    "about.heading": "Sobre mí",
    "about.body": "Soy Andrew Ratnikov, desarrollador full-stack que trabaja con empresas para construir las automatizaciones e integraciones a medida que las herramientas estándar y no-code no cubren. Me importa entregar cosas que funcionan de forma confiable, no solo demos.",
    "contact.heading": "Contacto",
    "contact.cta": "ratnikov.am@gmail.com",
    "footer.copyright": "© 2026 Andrew Ratnikov"
  }
};

// Placeholder entries — replace with real projects as they ship.
// Each project needs: id, url, tags, and a title/description per language.
const PROJECTS = [
  {
    id: "example-project",
    url: "#",
    tags: ["Node.js", "AI"],
    title: { en: "Example project", es: "Proyecto de ejemplo" },
    desc: {
      en: "Placeholder entry — replace with a real pet project and link.",
      es: "Entrada de ejemplo — sustitúyela por un proyecto real y su enlace."
    }
  }
];
