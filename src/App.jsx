import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      
      <section id="inicio">
        <Hero />
      </section>

      <section id="habilidades">
        <Skills />
      </section>

      <section id="proyectos">
        <Projects />
      </section>

      <section id="contacto">
        <Contact />
      </section>
      
      <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-slate-800 text-center">
         <p className="text-slate-500 text-xs tracking-widest uppercase">
           Hecho con React 19 + Tailwind CSS 4 | Jose Daniel Nuñez 2026
         </p>
      </footer>
    </div>
  )
}

export default App