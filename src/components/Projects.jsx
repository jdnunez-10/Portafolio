const projects = [
  {
    title: "CodeFlow: Gestión de Proyectos",
    description: "Plataforma colaborativa para la comunidad estudiantil de la UNAH basada en metodologías ágiles. Incluye tablero Kanban interactivo, analíticas con Burndown Charts y notificaciones en tiempo real.",
    tags: ["React 19", "Spring Boot 4", "MySQL", "Docker", "WebSockets"],
    link: "https://github.com/Josue-Dz/Proyecto_Ingenieria_Software",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop" // Imagen representativa de software/kanban
  },
  {
    title: "E-commerce: Tienda Virtual",
    description: "Sistema de comercio electrónico completo con carrito de compras, gestión de productos y pasarela de pagos. Desarrollado como solución integral de venta en línea.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    link: "https://github.com/jdnunez-10/Tienda-Virtual",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop" // Imagen representativa de ecommerce
  }
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-2 italic">Proyectos Destacados</h2>
      <p className="text-slate-400 mb-12">Selección de mis trabajos más relevantes en desarrollo de software.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-slate-800/20 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col"
          >
            {/* Imagen del Proyecto */}
            <div className="h-48 overflow-hidden bg-slate-700">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 grow leading-relaxed">
                {project.description}
              </p>

              {/* Tecnologías */}
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

              {/* Enlace a GitHub */}
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