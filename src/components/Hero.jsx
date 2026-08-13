import fotoPerfil from '../assets/perfil.png';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-blue-500 font-mono mb-3">Desarrollador Full-Stack · Freelance</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Construyo <span className="text-slate-400">sistemas</span> que <span className="text-blue-400">funcionan</span>.
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
          Desarrollo plataformas web y sistemas a medida con <span className="text-white font-semibold">Java, Spring Boot y React mi principal Stack</span>. 
          Creador de <span className="text-white font-semibold">Kolvix</span>, SaaS ganador del Startup Battle de la UNAH. 
          Disponible para nuevos proyectos.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition">
            Ver Proyectos
          </a>
          <a 
            href="/Profile.pdf" 
            download 
            className="border border-slate-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
      
      {/* Contenedor de Foto y Código */}
      <div className="flex-1 w-full max-w-md">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
            <div className="h-64 sm:h-80 overflow-hidden">
              <img 
                src={fotoPerfil} 
                alt="Jose Daniel Nuñez" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="p-6 font-mono text-xs sm:text-sm bg-slate-800/50">
              <p className="text-emerald-400">// Status Actual</p>
              <p className="text-blue-300">const daniel = {"{"}</p>
              <p className="pl-4 text-slate-300 italic">"disponibilidad": "abierto a proyectos",</p>
              <p className="pl-4 text-slate-300">"stack": "Java · Spring Boot · React",</p>
              <p className="pl-4 text-slate-300">"proyecto_destacado": "Kolvix"</p>
              <p className="text-blue-300">{"}"};</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}