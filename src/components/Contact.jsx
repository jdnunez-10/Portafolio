export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-linear-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Adorno visual de fondo */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 italic">¿Hablamos de tecnología?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Actualmente estoy abierto a nuevas oportunidades en redes y desarrollo de software, 
              o simplemente para compartir ideas sobre la ingeniería en sistemas. ¡Conectemos!
            </p>
            
            <div className="space-y-6">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/jose-daniel-nuñez/" 
                target="_blank" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <span className="text-blue-400 group-hover:text-white">In</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">LinkedIn</p>
                  <p className="text-slate-200 group-hover:text-blue-400 transition-colors">jose-daniel-nuñez</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:jdnunez2017@gmail.com" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <span className="text-emerald-400 group-hover:text-white">@</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Correo Electrónico</p>
                  <p className="text-slate-200 group-hover:text-emerald-400 transition-colors">jdnunez2017@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 text-center">
            <h3 className="text-xl font-bold text-white mb-4">¿Necesitas una respuesta rápida?</h3>
            <p className="text-slate-400 text-sm mb-6">
              Escríbeme directamente a mi WhatsApp. Suelo responder en menos de 24 horas.
            </p>
            <a 
              href="https://wa.me/50496773986" 
              target="_blank"
              className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20"
            >
              Enviar Mensaje (9677-3986)
            </a>
            <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-[0.2em]">Tegucigalpa, Honduras 🇭🇳</p>
          </div>
        </div>
      </div>
    </section>
  );
}