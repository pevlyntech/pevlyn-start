import Hero from '../sections/Hero.jsx'
import Problem from '../sections/Problem.jsx'
import Solutions from '../sections/Solutions.jsx'
import Process from '../sections/Process.jsx'
import Projects from '../sections/Projects.jsx'
import Services from '../sections/Services.jsx'
import FAQ from '../sections/FAQ.jsx'
import FinalCTA from '../sections/FinalCTA.jsx'

/**
 * / — la portada comercial.
 *
 * Presenta la propuesta de PEVLYN:
 *   problema → soluciones → cómo trabajamos → proyectos en marcha → servicios → dudas → contacto
 *
 * El producto PEVLYN Agenda vive en su propia página dedicada (/agenda)
 * accesible desde el menú y accesos directos superiores.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solutions />
      <Process />
      <Projects />
      <Services />
      <FAQ />
      <FinalCTA />
    </>
  )
}
