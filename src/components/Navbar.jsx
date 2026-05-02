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
        <div className="hidden sm:block text-xs bg-slate-800 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
          Honduras 🇭🇳
        </div>
      </div>
    </nav>
  );
}