const skillsData = [
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Spring Boot (Java)", "Laravel (PHP)", "Python", "C++"]
  },
  {
    title: "Frontend & UI",
    icon: "💻",
    skills: ["React", "Vite", "Tailwind CSS", "Arquitectura Web"]
  },
  {
    title: "Bases de Datos",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "Oracle", "SQL Server"]
  },
  {
    title: "Networking & Infraestructura",
    icon: "🌐",
    skills: ["Cisco Packet Tracer", "GNS3", "CCNA I Certified", "Mantenimiento de Redes"]
  }
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 italic">Habilidades Técnicas</h2>
          <p className="text-slate-400">Stack principal para construir tu proyecto, de backend a producción.</p>
        </div>
        <div className="flex gap-4">
          <div className="text-left md:text-right">
            <p className="text-blue-400 font-bold">Nivel Inglés</p>
            <p className="text-slate-300">B1 - Intermedio</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-slate-800/30 border border-slate-700 p-6 rounded-xl hover:border-blue-500/50 transition-all group"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
              <span role="img" aria-label={category.title}>{category.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-blue-300 mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-slate-400 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl shrink-0" role="img" aria-label="Liderazgo">🎙️</span>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
            <strong className="text-white">Liderazgo y Oratoria:</strong> Me apasiona exponer ideas técnicas de forma clara, liderar equipos y comunicarme directamente con el cliente durante todo el proyecto.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Proactivo", "Autodidacta", "Líder"].map(tag => (
            <span key={tag} className="text-xs bg-slate-700 text-slate-100 px-3 py-1 rounded-full border border-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}