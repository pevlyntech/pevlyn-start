import { useState } from 'react'
import Container from '../components/Container.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { Link } from '../lib/router.jsx'
import { BRAND, WHATSAPP_NUMBER } from '../config/site.js'
import { Scale, ShieldCheck, CheckCircle2, ChevronRight, AlertCircle, FileText, ArrowLeft, Mail, Phone } from 'lucide-react'

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('aceptacion')

  const sections = [
    { id: 'aceptacion', title: '1. Aceptación de los Términos' },
    { id: 'servicios', title: '2. Descripción de los Servicios' },
    { id: 'cuentas', title: '3. Cuentas de Usuario y Seguridad' },
    { id: 'uso-aceptable', title: '4. Reglas de Uso Aceptable' },
    { id: 'propiedad-intelectual', title: '5. Propiedad Intelectual y Licencia' },
    { id: 'planes-pagos', title: '6. Planes, Tarifas y Pagos' },
    { id: 'disponibilidad', title: '7. Disponibilidad y Mantenimiento' },
    { id: 'responsabilidad', title: '8. Limitación de Responsabilidad' },
    { id: 'suspension', title: '9. Suspensión y Terminación' },
    { id: 'ley-aplicable', title: '10. Ley Aplicable y Jurisdicción' },
  ]

  const scrollToSection = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-surface/30">
      {/* Cabecera Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
          <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[44rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <Container>
          <div className="flex flex-col items-start max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/15 hover:text-white mb-6"
            >
              <ArrowLeft size={14} />
              Volver al inicio
            </Link>

            <StatusBadge tone="active">Marco Contractual y Normativo</StatusBadge>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading leading-tight">
              Términos y <span className="text-gradient-on-dark">Condiciones</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg font-light">
              Por favor, lee detenidamente estos términos antes de utilizar nuestros servicios tecnológicos, sitio web y soluciones de software en la nube.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-white/10 pt-4 w-full">
              <span>Última actualización: <strong>Octubre de 2026</strong></span>
              <span>•</span>
              <span>Válido para: <strong>{BRAND.name} y productos del ecosistema</strong></span>
            </div>
          </div>
        </Container>
      </section>

      {/* Cuerpo principal del documento */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
            {/* Índice lateral sticky (Desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-card border border-border bg-white p-5 shadow-soft">
                <div className="flex items-center gap-2 text-ink font-heading text-sm font-semibold pb-3 border-b border-border">
                  <Scale size={16} className="text-periwinkle" />
                  Estructura de los términos
                </div>
                <nav className="mt-4 flex flex-col gap-1 text-xs">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center justify-between text-left rounded-lg px-2.5 py-2 transition-colors ${
                        activeSection === section.id
                          ? 'bg-lavender-mist/30 font-semibold text-periwinkle'
                          : 'text-text-muted hover:bg-warm-linen hover:text-ink'
                      }`}
                    >
                      <span className="truncate">{section.title}</span>
                      <ChevronRight size={13} className="opacity-60 shrink-0 ml-1" />
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-border/80">
                  <p className="text-[11px] text-text-subtle leading-relaxed">
                    Para dudas contractuales o de facturación: <br />
                    <a href="mailto:contacto@pevlyn.com" className="font-semibold text-periwinkle underline">
                      contacto@pevlyn.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Contenido legal */}
            <div className="space-y-12">
              {/* Sección 1 */}
              <article id="aceptacion" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <CheckCircle2 size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    1. Aceptación de los Términos
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Bienvenido a <strong className="text-ink">{BRAND.name}</strong>. Al acceder, navegar o utilizar el sitio web <strong className="text-ink">pevlyn.com</strong>, registrar una cuenta de negocio en <strong className="text-ink">agenda.pevlyn.com</strong> o contratar cualquiera de nuestros servicios de tecnología y software, usted declara que ha leído, comprendido y acepta quedar vinculado por los presentes Términos y Condiciones, así como por nuestra <Link to="/privacidad" className="text-periwinkle underline font-semibold">Política de Privacidad</Link>.
                  </p>
                  <p>
                    Si no está de acuerdo con alguno de los términos aquí estipulados, le solicitamos abstenerse de utilizar nuestras herramientas y plataformas. Si utiliza nuestros servicios en representación de una empresa o entidad comercial, declara y garantiza contar con las facultades legales suficientes para obligar a dicha entidad.
                  </p>
                </div>
              </article>

              {/* Sección 2 */}
              <article id="servicios" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <FileText size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    2. Descripción de los Servicios
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    {BRAND.name} es una empresa de Business Technology especializada en simplificar la operación y el crecimiento de negocios y profesionales mediante soluciones digitales:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    <li>
                      <strong className="text-ink">{BRAND.name} Agenda:</strong> Plataforma en la nube (SaaS) para la gestión automatizada de citas, catálogo de servicios, control de horarios, turnos de personal y reservas públicas de clientes finales.
                    </li>
                    <li>
                      <strong className="text-ink">Desarrollo Web & Software a Medida:</strong> Diseño y construcción de sitios web corporativos de alto rendimiento, aplicaciones a medida y portales comerciales.
                    </li>
                    <li>
                      <strong className="text-ink">Automatización de Procesos:</strong> Integración de flujos de trabajo, automatización de mensajería (WhatsApp, correo) y optimización operativa.
                    </li>
                  </ul>
                  <p className="text-xs text-text-subtle">
                    {BRAND.name} se reserva el derecho de actualizar, optimizar o discontinuar funcionalidades con el fin de mejorar el rendimiento y la seguridad del servicio.
                  </p>
                </div>
              </article>

              {/* Sección 3 */}
              <article id="cuentas" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <ShieldCheck size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    3. Cuentas de Usuario y Seguridad
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Para acceder a las herramientas administrativas de {BRAND.name} Agenda, se requiere la creación de una cuenta de usuario y el registro de un negocio:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    <li>
                      <strong className="text-ink">Veracidad de los datos:</strong> El usuario se compromete a proporcionar información verídica, exacta y actualizada durante el registro.
                    </li>
                    <li>
                      <strong className="text-ink">Custodia de credenciales:</strong> El usuario es el único responsable de mantener la confidencialidad de su contraseña y de los dispositivos habilitados para el segundo factor de autenticación (2FA / TOTP).
                    </li>
                    <li>
                      <strong className="text-ink">Notificación de incidentes:</strong> En caso de sospecha o detección de uso no autorizado de su cuenta, el usuario debe notificarlo de inmediato a {BRAND.name} a través de nuestros canales oficiales.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Sección 4 */}
              <article id="uso-aceptable" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <AlertCircle size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    4. Reglas de Uso Aceptable y Prohibiciones
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Queda expresamente prohibido hacer un uso indebido de los servicios de {BRAND.name}. En particular, el usuario se compromete a NO:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    <li>Utilizar los servicios para actividades fraudulentas, ilegales o que atenten contra los derechos de terceros.</li>
                    <li>Enviar comunicaciones no solicitadas, spam o realizar campañas masivas invasivas a través de las funciones de agendamiento.</li>
                    <li>Intentar vulnerar, descompilar, realizar ingeniería inversa o burlar los mecanismos de seguridad, cifrado o control de acceso de la plataforma.</li>
                    <li>Intentar eludir las políticas de limitación de tasa (rate limiting) o saturar de manera intencionada los servidores mediante scripts automatizados no autorizados (DDoS, bots).</li>
                    <li>Suplantar la identidad de cualquier persona física o jurídica.</li>
                  </ul>
                  <p className="text-xs text-text-subtle">
                    El incumplimiento de estas normas faculta a {BRAND.name} a suspender de forma inmediata el acceso a la plataforma sin derecho a indemnización.
                  </p>
                </div>
              </article>

              {/* Sección 5 */}
              <article id="propiedad-intelectual" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <Scale size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    5. Propiedad Intelectual y Licencia de Uso
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    <strong className="text-ink">Derechos de {BRAND.name}:</strong> Todos los derechos de propiedad intelectual e industrial sobre la plataforma, marcas comerciales, logotipos, código fuente de software, interfaces, arquitecturas y metodologías son propiedad exclusiva de {BRAND.name}.
                  </p>
                  <p>
                    <strong className="text-ink">Licencia de uso del SaaS:</strong> {BRAND.name} otorga al negocio suscriptor una licencia no exclusiva, intransferible y revocable para utilizar el software durante la vigencia de su suscripción o uso activo de la herramienta.
                  </p>
                  <p>
                    <strong className="text-ink">Datos del Cliente:</strong> Los datos, listas de clientes, marcas registradas e información comercial que el negocio cargue en su espacio de {BRAND.name} Agenda son de propiedad exclusiva del cliente. {BRAND.name} no adquiere derechos sobre dicha información más allá de la autorización necesaria para alojarla y procesarla según se requiera para prestar el servicio.
                  </p>
                </div>
              </article>

              {/* Sección 6 */}
              <article id="planes-pagos" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <FileText size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    6. Planes de Suscripción, Tarifas y Pagos
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Las condiciones comerciales aplicables a nuestros productos y servicios se rigen por las siguientes pautas:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    <li>
                      <strong className="text-ink">Planes de {BRAND.name} Agenda:</strong> Se ofrecen bajo modalidades gratuitas de prueba o planes por suscripción periódica (mensual/anual) con diferentes capacidades de profesionales, citas y sucursales.
                    </li>
                    <li>
                      <strong className="text-ink">Precios y modificaciones:</strong> Los precios publicados están expresados en pesos colombianos (COP) o dólares estadounidenses (USD) según se indique. {BRAND.name} notificará cualquier modificación de precios con al menos 30 días de antelación.
                    </li>
                    <li>
                      <strong className="text-ink">Cancelación voluntaria:</strong> El cliente puede cancelar su suscripción en cualquier momento sin penalidad, manteniendo acceso al servicio hasta la culminación del período previamente facturado.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Sección 7 */}
              <article id="disponibilidad" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <CheckCircle2 size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    7. Disponibilidad y Mantenimiento del Servicio
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    {BRAND.name} realiza esfuerzos técnicos comercialmente razonables para mantener una disponibilidad continua y óptima de sus plataformas las 24 horas del día, los 365 días del año.
                  </p>
                  <p>
                    Sin embargo, el servicio puede experimentar interrupciones programadas para mantenimiento preventivo, mejoras técnicas o actualizaciones de seguridad. En la medida de lo posible, dichas intervenciones se llevarán a cabo en horarios de bajo tráfico y serán notificadas previamente.
                  </p>
                </div>
              </article>

              {/* Sección 8 */}
              <article id="responsabilidad" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <Scale size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    8. Limitación de Responsabilidad
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    En la máxima medida permitida por la legislación aplicable:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    <li>
                      {BRAND.name} provee sus herramientas de software &quot;tal como están&quot; y &quot;según disponibilidad&quot;.
                    </li>
                    <li>
                      {BRAND.name} no se hace responsable por lucro cesante, pérdida de ingresos, pérdida de oportunidades de negocio o daños indirectos derivados del uso o de la imposibilidad de uso de la plataforma.
                    </li>
                    <li>
                      Cada negocio afiliado es el único responsable por la relación comercial, la calidad de los servicios prestados y el cumplimiento de las citas acordadas con sus respectivos clientes finales.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Sección 9 */}
              <article id="suspension" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <AlertCircle size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    9. Suspensión y Terminación
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    {BRAND.name} podrá suspender temporalmente o cancelar de forma definitiva el acceso de un usuario a la plataforma cuando:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    <li>Exista incumplimiento grave o reiterado de estos Términos y Condiciones.</li>
                    <li>Se detecte actividad sospechosa que comprometa la seguridad de otros usuarios o de la infraestructura del sistema.</li>
                    <li>Exista requerimiento judicial o de autoridad competente.</li>
                  </ul>
                </div>
              </article>

              {/* Sección 10 */}
              <article id="ley-aplicable" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <Scale size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    10. Ley Aplicable y Jurisdicción
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Estos Términos y Condiciones se rigen e interpretan de conformidad con las leyes de la <strong className="text-ink">República de Colombia</strong>.
                  </p>
                  <p>
                    Cualquier controversia o diferencia que surja entre las partes se intentará resolver en primera instancia mediante arreglo directo y conciliación amigable. De no lograrse un acuerdo, las partes se someterán a la jurisdicción ordinaria de los jueces de la República de Colombia.
                  </p>
                  <div className="mt-6 rounded-xl border border-border bg-warm-linen/50 p-5 space-y-2 text-sm">
                    <h3 className="font-heading text-sm font-semibold text-ink">Canal Oficial de Notificaciones y Dudas:</h3>
                    <p className="flex items-center gap-2 text-text-muted">
                      <Mail size={16} className="text-periwinkle" />
                      <strong>Correo:</strong>{' '}
                      <a href="mailto:contacto@pevlyn.com" className="text-periwinkle underline">contacto@pevlyn.com</a>
                    </p>
                    <p className="flex items-center gap-2 text-text-muted">
                      <Phone size={16} className="text-periwinkle" />
                      <strong>WhatsApp:</strong> +{WHATSAPP_NUMBER}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
