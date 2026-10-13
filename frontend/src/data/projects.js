/**
 * En qué estamos trabajando.
 *
 * ⚠️ Solo proyectos reales, con su estado real. No se muestran métricas,
 * testimonios ni resultados, porque todavía no existen.
 *
 * Todo negocio identificable que aparezca aquí necesita autorización para ser
 * mostrado públicamente. `Clínica Daniel Rivera` la tiene: confirmada por el
 * cliente el 29/09/2026. Para retirar cualquier proyecto basta con borrar su
 * entrada de este array.
 *
 * El `id` es estable: `data/navigation.js` lo usa para construir el acceso
 * directo de la navbar sin repetir la URL en dos sitios.
 */
export const projects = [
  {
    id: 'pevlyn-agenda',
    name: 'PEVLYN Agenda',
    kind: 'Producto propio',
    status: 'En desarrollo',
    description:
      'La plataforma de clientes, citas y servicios que estamos construyendo como primer producto del ecosistema.',
    accent: true,
  },
  {
    id: 'clinica-daniel-rivera',
    name: 'Clínica Daniel Rivera',
    kind: 'Proyecto a medida',
    status: 'En desarrollo',
    description:
      'Sistema de gestión de citas adaptado a la operación de la clínica.',
    href: 'https://clinica-daniel-rivera-1ty8.vercel.app/',
  },
  {
    id: 'landing-pages',
    name: 'Landing pages',
    kind: 'Servicio',
    status: 'Disponible',
    description:
      'Experiencias digitales para negocios que necesitan presencia profesional y un canal de contacto que funcione.',
  },
]
