import { CalendarDays } from 'lucide-react'

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

/**
 * Acceso directo de la navbar: icono de agenda con enlace a la plataforma.
 */
export const navQuickLinks = [
  {
    id: 'agenda',
    label: 'PEVLYN Agenda',
    hint: 'Ir a la plataforma',
    icon: CalendarDays,
    href: 'https://agenda.pevlyn.com',
    external: true,
  },
]

/** Micro-mensaje bajo el hero: contextualiza sin ocupar una banda entera. */
export const trustPillars = ['Websites', 'Software', 'Automatización']
