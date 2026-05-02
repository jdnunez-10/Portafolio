export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-blue-500 font-mono mb-3">Futuro Ingeniero en Sistemas</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Conectando <span className="text-slate-400">código</span> con <span className="text-blue-400">infraestructura</span>.
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-xl">
          Técnico de Redes Nivel I en <span className="text-white font-semibold">ITS Infocom</span>. 
          A solo 7 clases de graduarme. Apasionado por el desarrollo Full Stack y la oratoria técnica.
        </p>
        <div className="flex gap-4">
          <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition">
            Ver Proyectos
          </a>
          {/* Asegúrate de poner tu archivo PDF en la carpeta 'public' */}
          <a 
            href="/CV_Jose_Daniel_Nunez.pdf" 
            download 
            className="border border-slate-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
      
      <div className="flex-1 bg-slate-800/50 border border-slate-700 p-6 rounded-2xl font-mono text-sm shadow-2xl">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-emerald-400">// Perfil Profesional</p>
        <p className="text-blue-300">const developer = {"{"}</p>
        <p className="pl-4 text-slate-300">puesto: "Técnico Redes Nivel I",</p>
        <p className="pl-4 text-slate-300">estatus: "Casi Ingeniero",</p>
        <p className="pl-4 text-slate-300">skills: ["React", "Spring Boot", "CCNA"],</p>
        <p className="pl-4 text-slate-300">oratoria: true</p>
        <p className="text-blue-300">{"}"};</p>
      </div>
    </section>
  );
}