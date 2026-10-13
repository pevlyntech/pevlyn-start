import { CalendarDays, HeartPulse } from 'lucide-react'

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
export const navCta = { label: 'PEVLYN Agenda', to: '/agenda' }

/**
 * Accesos directos de la navbar: dos botones de icono, siempre visibles.
 *
 * 1. PEVLYN Agenda: nuestro producto de citas.
 * 2. PEVLYN Health: solución para el sector salud (en desarrollo).
 */
export const navQuickLinks = [
  {
    id: 'agenda',
    label: 'PEVLYN Agenda',
    hint: 'En desarrollo',
    icon: CalendarDays,
  },
  {
    id: 'health',
    label: 'PEVLYN Health',
    hint: 'En desarrollo',
    icon: HeartPulse,
  },
]

/** Micro-mensaje bajo el hero: contextualiza sin ocupar una banda entera. */
export const trustPillars = ['Websites', 'Software', 'Automatización']
