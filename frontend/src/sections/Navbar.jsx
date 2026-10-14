import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Logo from '../components/Logo.jsx'
import { navLinks, navQuickLinks } from '../data/navigation.js'
import { Link, useRouter } from '../lib/router.jsx'

/**
 * Navbar adaptativa.
 *
 * Arriba del todo es transparente sobre el hero oscuro (logo y enlaces en
 * blanco); al hacer scroll pasa a fondo claro con blur. El menú móvil abierto
 * fuerza el estado claro para que siempre haya contraste suficiente.
 */
/**
 * Solo los enlaces de ruta marcan página activa.
 *
 * Los que llevan ancla (`/#soluciones`) son saltos dentro de la página, no
 * destinos: resolverlos a su ruta hacía que en `/` se marcaran activos a la
 * vez Inicio, Soluciones, Nosotros y Contacto.
 */
function isActive(to, pathname) {
  if (to.includes('#')) return false
  return to === pathname
}

/**
 * Acceso directo de icono.
 *
 * Es un botón sin texto, así que su nombre accesible lo da `aria-label` y el
 * `title` lo muestra al pasar el cursor. Mide 40px, igual que el botón de
 * menú, para que los tres círculos de la derecha se lean como una familia.
 */
function QuickLink({ item, onClick }) {
  const Icon = item.icon
  const name = item.hint ? `${item.label} (${item.hint})` : item.label

  const shared = {
    className:
      'group inline-flex flex-col items-center justify-center rounded-xl px-2.5 py-1 text-ink/80 transition-colors ' +
      'hover:bg-warm-linen hover:text-periwinkle',
    title: item.hint ? `${item.label} — ${item.hint}` : item.label,
    'aria-label': name,
    onClick,
  }

  const content = (
    <>
      <Icon size={19} strokeWidth={2} className="transition-transform duration-200 motion-safe:group-hover:scale-110" aria-hidden="true" />
      <span className="mt-0.5 font-heading text-[0.62rem] font-bold tracking-tight text-ink/75 transition-colors group-hover:text-periwinkle">
        {item.label}
      </span>
    </>
  )

  if (item.external && item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer noopener" {...shared}>
        {content}
      </a>
    )
  }

  if (item.to) {
    return (
      <Link to={item.to} {...shared}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={
        'inline-flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-full ' +
        'text-ink/70 ring-1 ring-linen-stone/60 transition-colors ' +
        'hover:bg-warm-linen/60 hover:text-periwinkle'
      }
      title={item.hint ? `${item.label} — ${item.hint}` : item.label}
      aria-label={name}
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      {content}
    </button>
  )
}

export default function Navbar() {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? 'border-b border-warm-linen bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-b border-warm-linen/80 bg-white/85 backdrop-blur-md'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="shrink-0"
          aria-label="PEVLYN — inicio"
          onClick={() => {
            if (pathname === '/') {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
          }}
        >
          <Logo size="md" tone="dark" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.to, pathname)
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => {
                      if (link.to === '/' && pathname === '/') {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      }
                    }}
                    aria-current={active ? 'page' : undefined}
                    className={`inline-flex h-9 items-center rounded-full px-2.5 font-sans text-sm tracking-[0.05em] transition-colors min-[1120px]:whitespace-nowrap xl:px-3.5 ${
                      active
                        ? 'bg-lavender-mist/35 font-semibold text-periwinkle'
                        : 'font-normal text-ink/80 hover:bg-warm-linen hover:text-periwinkle'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {navQuickLinks.map((item) => (
            <QuickLink key={item.id} item={item} onClick={() => setOpen(false)} />
          ))}



          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-warm-linen lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div id="menu-movil" hidden={!open} className="border-t border-warm-linen bg-white shadow-xl lg:hidden">
        <Container className="py-4">
          <nav aria-label="Principal móvil">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => {
                      setOpen(false)
                      if (link.to === '/' && pathname === '/') {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      }
                    }}
                    aria-current={isActive(link.to, pathname) ? 'page' : undefined}
                    className={`block rounded-xl px-3 py-3 font-sans text-base transition-colors ${
                      isActive(link.to, pathname)
                        ? 'bg-lavender-mist/35 font-semibold text-periwinkle'
                        : 'font-normal text-ink hover:bg-warm-linen'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="https://agenda.pevlyn.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-sans text-base font-semibold text-white shadow-lift transition hover:bg-primary-dark sm:hidden"
          >
            PEVLYN Agenda
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </Container>
      </div>
    </header>
  )
}
