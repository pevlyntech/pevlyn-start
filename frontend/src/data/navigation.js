import { CalendarDays, HeartPulse } from 'lucide-react'
import { projects } from './projects.js'

/**
 * Navegación del sitio.
 *
 * `to` es una ruta del router; los enlaces con ancla la llevan incluida
 * (`/#soluciones`) para que funcionen igual desde cualquier página, no solo
 * desde la portada.
 */
export const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Soluciones', to: '/#soluciones' },
  { label: 'Servicios', to: '/#servicios' },
  { label: 'PEVLYN Agenda', to: '/agenda' },
  { label: 'Nosotros', to: '/#nosotros' },
  { label: 'Contacto', to: '/#contacto' },
]

/** CTA destacado de la navbar. */
export const navCta = { label: 'Probar PEVLYN Agenda', to: '/demo?tool=agenda' }

const clinica = projects.find((p) => p.id === 'clinica-daniel-rivera')

/**
 * Accesos directos de la navbar: dos botones de icono, siempre visibles.
 *
 * Son los dos destinos que un visitante quiere alcanzar sin leer la portada:
 * el producto propio y el proyecto que ya se puede ver funcionando. La URL de
 * la clínica NO se escribe aquí: se lee de `data/projects.js`, que es su única
 * fuente, para que al cambiarla no queden dos valores distintos. Si ese
 * proyecto se retira de allí, el acceso desaparece solo.
 */
export const navQuickLinks = [
  {
    id: 'agenda',
    label: 'PEVLYN Agenda',
    hint: 'Nuestro producto de citas',
    icon: CalendarDays,
    to: '/agenda',
  },
  clinica?.href && {
    id: 'clinica',
    label: clinica.name,
    hint: 'Proyecto en marcha',
    icon: HeartPulse,
    href: clinica.href,
    external: true,
  },
].filter(Boolean)

/** Micro-mensaje bajo el hero: contextualiza sin ocupar una banda entera. */
export const trustPillars = ['Websites', 'Software', 'Automatización']
