import kolvix from '../assets/kolvix.jpeg';
import ecommerce from '../assets/e-commerce.jpeg';
import PumaTask from '../assets/PumaTask.png';

const featuredProject = {
  title: "Kolvix: SaaS para Talleres de Reparación",
  description: "Plataforma multi-tenant para talleres de reparación de autos y tecnología. Autenticación JWT segura, control de acceso por roles (Admin, Técnico, Recepcionista, Propietario) y seguimiento público de órdenes para clientes finales. Arquitectura probada de extremo a extremo con Docker y Postman.",
  tags: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "Docker"],
  demo: "https://kolvix.app",
  badge: "🏆 Ganador Startup Battle — Industria del Software, UNAH",
  image: kolvix
};

const projects = [
  {
    title: "CodeFlow: Gestión de Proyectos",
    description: "Plataforma colaborativa para la comunidad estudiantil de la UNAH basada en metodologías ágiles. Incluye tablero Kanban interactivo, analíticas con Burndown Charts y notificaciones en tiempo real.",
    tags: ["React 19", "Spring Boot 4", "MySQL", "Docker", "WebSockets"],
    link: "https://github.com/Josue-Dz/Proyecto_Ingenieria_Software",
    image: PumaTask
  },
  {
    title: "E-commerce: Tienda Virtual",
    description: "Sistema de comercio electrónico completo con carrito de compras, gestión de productos y pasarela de pagos. Desarrollado como solución integral de venta en línea.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    link: "https://github.com/jdnunez-10/Tienda-Virtual",
    image: ecommerce
  }
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-2 italic">Proyectos Destacados</h2>
      <p className="text-slate-400 mb-12">Selección de mis trabajos más relevantes en desarrollo de software.</p>

      {/* Proyecto Destacado: Kolvix */}
      <div className="group bg-linear-to-br from-slate-800/40 to-slate-900 border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-500/60 transition-all mb-8 grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-full overflow-hidden bg-slate-700">
          <img
            src={featuredProject.image}
            alt={featuredProject.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        </div>

        <div className="p-8 flex flex-col justify-center">
          <span className="inline-block w-fit text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full mb-4">
            {featuredProject.badge}
          </span>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {featuredProject.title}
          </h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {featuredProject.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Contenedor de botones alineados */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={featuredProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
            >
              Ver Demo en Vivo
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
              </svg>
            </a>

            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit border border-slate-700 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Código en GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Otros Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-800/20 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col"
          >
            <div className="h-48 overflow-hidden bg-slate-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
            </div>

            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
              >
                Ver Código en GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}