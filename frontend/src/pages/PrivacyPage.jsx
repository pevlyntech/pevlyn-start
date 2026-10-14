import { useState } from 'react'
import Container from '../components/Container.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { Link } from '../lib/router.jsx'
import { BRAND, WHATSAPP_NUMBER } from '../config/site.js'
import { ShieldCheck, Lock, FileText, CheckCircle2, ChevronRight, Mail, Phone, ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('responsable')

  const sections = [
    { id: 'responsable', title: '1. Identificación del Responsable y Encargado' },
    { id: 'marco-legal', title: '2. Marco Legal y Ámbito de Aplicación' },
    { id: 'datos-recolectados', title: '3. Datos Personales que Recopilamos' },
    { id: 'finalidades', title: '4. Finalidades del Tratamiento' },
    { id: 'seguridad', title: '5. Seguridad y Aislamiento Técnico de Datos' },
    { id: 'derechos', title: '6. Derechos del Titular (Habeas Data)' },
    { id: 'procedimiento', title: '7. Canales para Ejercer tus Derechos' },
    { id: 'terceros', title: '8. Transmisión a Proveedores de Infraestructura' },
    { id: 'cookies', title: '9. Cookies y Almacenamiento Local' },
    { id: 'vigencia', title: '10. Vigencia y Modificaciones' },
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

            <StatusBadge tone="active">Transparencia y Seguridad</StatusBadge>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading leading-tight">
              Política de <span className="text-gradient-on-dark">Privacidad</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg font-light">
              En {BRAND.name} nos tomamos en serio la custodia, confidencialidad y el tratamiento ético de tus datos personales. Conoce cómo protegemos tu información y qué derechos tienes.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-white/10 pt-4 w-full">
              <span>Última actualización: <strong>Octubre de 2026</strong></span>
              <span>•</span>
              <span>Aplica a: <strong>{BRAND.name} (pevlyn.com) y {BRAND.name} Agenda (agenda.pevlyn.com)</strong></span>
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
                  <FileText size={16} className="text-periwinkle" />
                  Contenido del documento
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
                    ¿Tienes dudas sobre tus datos? Escríbenos a{' '}
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
              <article id="responsable" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <ShieldCheck size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    1. Identificación del Responsable y del Encargado
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    El presente documento establece las políticas de tratamiento de datos personales de{' '}
                    <strong className="text-ink">{BRAND.name}</strong> (en adelante, &quot;{BRAND.name}&quot;, &quot;nosotros&quot; o &quot;la plataforma&quot;), titular de los dominios <strong className="text-ink">pevlyn.com</strong> y sus subdominios asociados, incluyendo la solución SaaS <strong className="text-ink">agenda.pevlyn.com</strong>.
                  </p>
                  <p>
                    Dependiendo de la naturaleza del uso de nuestros servicios, los roles de tratamiento de datos se definen así:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 pt-2">
                    <div className="rounded-xl border border-border bg-warm-linen/40 p-4">
                      <h3 className="font-heading text-sm font-semibold text-ink mb-1">
                        {BRAND.name} como Responsable
                      </h3>
                      <p className="text-xs text-text-muted">
                        Respecto a los datos de los usuarios directos, administradores y profesionales que se registran en {BRAND.name} para crear una cuenta, contratar soluciones o solicitar información comercial.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-warm-linen/40 p-4">
                      <h3 className="font-heading text-sm font-semibold text-ink mb-1">
                        {BRAND.name} como Encargado
                      </h3>
                      <p className="text-xs text-text-muted">
                        Respecto a los datos de los clientes finales que reservan citas en los negocios gestionados por {BRAND.name} Agenda. En este escenario, cada Negocio actúa como <strong>Responsable del Tratamiento</strong> y {BRAND.name} provee la infraestructura tecnológica segura como <strong>Encargado</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sección 2 */}
              <article id="marco-legal" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <FileText size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    2. Marco Legal y Ámbito de Aplicación
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Esta política ha sido elaborada en estricto cumplimiento de las disposiciones constitucionales y legales vigentes en la República de Colombia en materia de protección de datos personales:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted">
                    <li>
                      <strong className="text-ink">Artículo 15 de la Constitución Política de Colombia</strong> (Derecho a la intimidad, buen nombre y Habeas Data).
                    </li>
                    <li>
                      <strong className="text-ink">Ley Estatutaria 1581 de 2012</strong>, por la cual se dictan disposiciones generales para la protección de datos personales.
                    </li>
                    <li>
                      <strong className="text-ink">Decreto Reglamentario 1377 de 2013</strong> (compilado en el Decreto Único Reglamentario 1074 de 2015), relativo a la recolección, autorización y deberes de los responsables y encargados.
                    </li>
                  </ul>
                  <p>
                    Esta política aplica a cualquier recolección de datos realizada a través de nuestro sitio web informativo, formularios de contacto, plataformas de demostración interactiva y nuestra suite SaaS de agendamiento y software.
                  </p>
                </div>
              </article>

              {/* Sección 3 */}
              <article id="datos-recolectados" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <CheckCircle2 size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    3. Datos Personales que Recopilamos
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    {BRAND.name} recolecta únicamente la información estrictamente necesaria para brindar nuestros servicios tecnológicos de manera segura, óptima y confiable:
                  </p>

                  <div className="space-y-4 pt-1">
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-heading text-sm font-semibold text-ink">A. Contacto y Consultas Comerciales (pevlyn.com)</h3>
                      <p className="text-xs text-text-muted mt-1">
                        Nombre completo, dirección de correo electrónico, número de teléfono o WhatsApp y detalles del negocio o requerimiento tecnológico enviado a través de nuestros formularios o enlaces de mensajería directa.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-heading text-sm font-semibold text-ink">B. Administradores y Colaboradores ({BRAND.name} Agenda)</h3>
                      <p className="text-xs text-text-muted mt-1">
                        Nombre y apellido, correo electrónico corporativo o personal, contraseña protegida mediante hash criptográfico irreversible (Argon2id), clave secreta de segundo factor de autenticación (TOTP, opcional pero recomendada), rol dentro del negocio y registros de auditoría de actividad.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="font-heading text-sm font-semibold text-ink">C. Clientes Finales de Negocios (Reserva de Citas)</h3>
                      <p className="text-xs text-text-muted mt-1">
                        Nombre, número telefónico (para confirmación y recordatorio de citas vía SMS o mensajería), correo electrónico (opcional, para envío de enlace de gestión de cita) y notas específicas del servicio solicitado. <em>Nota: No solicitamos ni almacenamos datos sensibles salvo autorización expresa en servicios de salud bajo acuerdos específicos.</em>
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sección 4 */}
              <article id="finalidades" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <FileText size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    4. Finalidades del Tratamiento de los Datos
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Los datos personales recolectados son tratados para las siguientes finalidades legítimas y explícitas:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted">
                    <li>
                      <strong className="text-ink">Prestación de la solución SaaS:</strong> Permitir la creación de cuentas de negocio, configuración de catálogos de servicios, calendarios de disponibilidad, registro de reservas y gestión de turnos.
                    </li>
                    <li>
                      <strong className="text-ink">Notificaciones operativas esenciales:</strong> Envío de confirmaciones de reserva, enlaces seguros para consultar o reprogramar citas, alertas de vencimiento y códigos de restablecimiento de contraseña.
                    </li>
                    <li>
                      <strong className="text-ink">Atención y soporte técnico:</strong> Dar respuesta a preguntas, diagnósticos empresariales solicitados en el sitio web y solicitudes de soporte funcional.
                    </li>
                    <li>
                      <strong className="text-ink">Seguridad y prevención del fraude:</strong> Proteger la infraestructura contra ataques cibernéticos, detectar patrones anómalos (rate limiting, honeypots contra bots) y autenticar de forma segura las sesiones activas.
                    </li>
                  </ul>
                  <p className="text-xs text-text-subtle italic bg-warm-linen p-3 rounded-lg">
                    {BRAND.name} no vende, no alquila y no comercializa bases de datos personales a terceros bajo ninguna circunstancia.
                  </p>
                </div>
              </article>

              {/* Sección 5 */}
              <article id="seguridad" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <Lock size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    5. Seguridad y Aislamiento Técnico de Datos
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    La arquitectura tecnológica de {BRAND.name} ha sido diseñada bajo el principio de <em>Security by Design</em> (Seguridad por Diseño), incorporando las siguientes salvaguardas:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 pt-1">
                    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                      <h4 className="font-heading text-xs font-semibold text-ink uppercase tracking-wider text-periwinkle">
                        Cifrado Fuerte
                      </h4>
                      <p className="mt-1 text-xs text-text-muted leading-relaxed">
                        Contraseñas procesadas con el algoritmo de derivación de claves <strong>Argon2id</strong>. Tráfico en tránsito protegido 100% con TLS 1.3 / HTTPS y encabezados HSTS.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                      <h4 className="font-heading text-xs font-semibold text-ink uppercase tracking-wider text-periwinkle">
                        Aislamiento Multitenant
                      </h4>
                      <p className="mt-1 text-xs text-text-muted leading-relaxed">
                        Aislamiento estricto de datos por negocio (tenant). Ningún negocio o usuario puede acceder o consultar datos pertenecientes a otra cuenta comercial.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                      <h4 className="font-heading text-xs font-semibold text-ink uppercase tracking-wider text-periwinkle">
                        Gestión de Tokens Segura
                      </h4>
                      <p className="mt-1 text-xs text-text-muted leading-relaxed">
                        Los tokens de acceso viven exclusivamente en la memoria del navegador (nunca en localStorage para mitigar riesgos XSS); los tokens de refresco viajan en cookies HttpOnly y SameSite protegidas contra CSRF.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                      <h4 className="font-heading text-xs font-semibold text-ink uppercase tracking-wider text-periwinkle">
                        Mínimo Privilegio
                      </h4>
                      <p className="mt-1 text-xs text-text-muted leading-relaxed">
                        Políticas de control de acceso estricto a las bases de datos de producción mediante credenciales rotadas y registro de auditoría.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sección 6 */}
              <article id="derechos" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <ShieldCheck size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    6. Derechos del Titular (Habeas Data)
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    De conformidad con el Artículo 8 de la Ley 1581 de 2012, todo titular de datos personales cuenta con los siguientes derechos fundamentales:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted">
                    <li>
                      <strong className="text-ink">Conocer, actualizar y rectificar:</strong> Solicitar en cualquier momento la consulta o corrección de sus datos personales frente a información parcial, inexacta, incompleta o fraccionada.
                    </li>
                    <li>
                      <strong className="text-ink">Solicitar prueba de autorización:</strong> Exigir constancia de la autorización otorgada para el tratamiento de sus datos, salvo las excepciones legales aplicables.
                    </li>
                    <li>
                      <strong className="text-ink">Ser informado sobre el uso:</strong> Conocer en detalle el uso y tratamiento que {BRAND.name} o el negocio afiliado le ha dado a sus datos.
                    </li>
                    <li>
                      <strong className="text-ink">Revocar la autorización o suprimir el dato:</strong> Solicitar la eliminación total de sus datos cuando considere que en el tratamiento no se respetan los principios, derechos y garantías constitucionales y legales.
                    </li>
                    <li>
                      <strong className="text-ink">Acceso gratuito:</strong> Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Sección 7 */}
              <article id="procedimiento" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <Mail size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    7. Canales y Procedimiento para Ejercer tus Derechos
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Para consultar, actualizar, rectificar o solicitar la supresión de tus datos personales, puedes contactar al área encargada de protección de datos de {BRAND.name} a través de los siguientes canales oficiales:
                  </p>
                  <div className="rounded-xl border border-border bg-warm-linen/50 p-5 space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-ink">
                      <Mail size={16} className="text-periwinkle" />
                      <strong>Correo Electrónico:</strong>{' '}
                      <a href="mailto:contacto@pevlyn.com" className="text-periwinkle underline">contacto@pevlyn.com</a>{' '}
                      o <a href="mailto:citas@pevlyn.com" className="text-periwinkle underline">citas@pevlyn.com</a>
                    </p>
                    <p className="flex items-center gap-2 text-ink">
                      <Phone size={16} className="text-periwinkle" />
                      <strong>WhatsApp Oficial:</strong> +{WHATSAPP_NUMBER}
                    </p>
                  </div>
                  <p className="text-xs text-text-muted">
                    <strong>Tiempos de respuesta:</strong> Las consultas serán atendidas en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo. Los reclamos (actualización o supresión) serán resueltos en un término máximo de quince (15) días hábiles, de acuerdo con los plazos previstos en la Ley 1581 de 2012.
                  </p>
                </div>
              </article>

              {/* Sección 8 */}
              <article id="terceros" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <Lock size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    8. Transmisión a Proveedores de Infraestructura en la Nube
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Para prestar el servicio con estándares internacionales de alta disponibilidad, {BRAND.name} contrata servicios de infraestructura tecnológica con proveedores de primer nivel mundial que actúan como encargados tecnológicos de alojamiento y cómputo:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    <li><strong className="text-ink">Vercel Inc.:</strong> Alojamiento y despliegue del frontend y redes de distribución de contenido (CDN).</li>
                    <li><strong className="text-ink">Railway Corp. / Supabase Inc.:</strong> Alojamiento de contenedores de backend y base de datos relacional PostgreSQL cifrada.</li>
                    <li><strong className="text-ink">Resend Inc.:</strong> Infraestructura de envío de correos transaccionales operativos.</li>
                  </ul>
                  <p className="text-xs text-text-muted">
                    Todos estos proveedores cuentan con certificaciones internacionales de seguridad (SOC 2, ISO 27001 y cumplimiento de cláusulas contractuales tipo para el tratamiento seguro de datos).
                  </p>
                </div>
              </article>

              {/* Sección 9 */}
              <article id="cookies" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <FileText size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    9. Cookies y Almacenamiento Local
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    Nuestros sitios utilizan cookies técnicas estrictamente necesarias para el funcionamiento de la plataforma:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    <li>
                      <strong className="text-ink">Cookies de Sesión y Seguridad (csrftoken, pevlyn_refresh):</strong> Necesarias para verificar la legitimidad de las peticiones HTTP y prevenir ataques de falsificación de peticiones en sitios cruzados (CSRF).
                    </li>
                    <li>
                      <strong className="text-ink">Almacenamiento Local (localStorage):</strong> Utilizado únicamente para recordar preferencias de interfaz (como el negocio activo seleccionado por el usuario en el panel de control) sin almacenar credenciales ni datos personales sensibles.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Sección 10 */}
              <article id="vigencia" className="scroll-mt-28 rounded-card border border-border bg-white p-7 sm:p-9 shadow-soft">
                <div className="flex items-center gap-3 text-periwinkle mb-3">
                  <ShieldCheck size={22} />
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                    10. Vigencia y Modificaciones
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-text-muted space-y-4 leading-relaxed font-sans text-[15px]">
                  <p>
                    La presente Política de Privacidad rige a partir de su publicación en el sitio web oficial de {BRAND.name} y permanecerá vigente mientras sea necesario para cumplir con las finalidades descritas o las exigencias legales.
                  </p>
                  <p>
                    Cualquier cambio sustancial en las políticas de tratamiento será comunicado a través de {BRAND.name} (pevlyn.com) o mediante aviso directo en la plataforma antes de su entrada en vigor.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
