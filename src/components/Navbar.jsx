export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#inicio" className="text-blue-400 font-mono font-bold text-lg cursor-pointer">
          &lt;Daniel.Dev /&gt;
        </a>
        <ul className="hidden md:flex gap-8 text-slate-300 text-sm font-medium">
          <li><a href="#inicio" className="hover:text-blue-400 transition">Sobre mí</a></li>
          <li><a href="#habilidades" className="hover:text-blue-400 transition">Habilidades</a></li>
          <li><a href="#proyectos" className="hover:text-blue-400 transition">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-blue-400 transition">Contacto</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            Disponible para proyectos
          </div>
          
          <a
            href="#contacto"
            className="text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Contrátame
          </a>
        </div>
      </div>
    </nav>
  );
}