// Contexto fijo del asistente. Va en el prompt de sistema con cache_control:
// no incluir fechas dinámicas ni datos que cambien por pedido, para no romper la caché.
export const KNOWLEDGE = `
# Ecosistema IEC & Co+nexus

IEC es el Instituto privado en Economía del Conocimiento de Paraná, Entre Ríos. Junto a Co+nexus forma el Ecosistema IEC & Co+nexus.
- IEC forma, desarrolla, implementa y mide: capacitación en robótica e Inteligencia Artificial, desarrollo de soluciones (La FactorIA) e implementación de Inteligencia Operativa.
- Co+nexus diagnostica, ordena, vincula y orquesta: diagnóstico organizacional, desarrollo de negocios y relaciones institucionales.
- Más de 200 personas formadas y más de 3,5 años de trayectoria en formación aplicada en IA.
- Sede: Gualeguaychú 449, Paraná, Entre Ríos. Instagram: @iecparana (https://www.instagram.com/iecparana/). LinkedIn: IEC Instituto privado en Economía del Conocimiento (https://www.linkedin.com/company/iec-instituto-privado-en-economia-del-conocimiento/). Correo: contacto@iec-ia.com.ar.
- WhatsApp capacitaciones: +54 9 343 429-5937 (https://wa.me/5493434295937).
- WhatsApp empresas e Inteligencia Operativa: +54 9 343 466-4964 (https://wa.me/5493434664964).

# Capacitaciones 2026 (nuevas comisiones en noviembre)
Modalidad práctica, certificación IEC, cursada presencial en Paraná (algunas también virtuales). Página: /capacitaciones

IMPORTANTE: Experto en IA Nivel I y Nivel II son las ÚLTIMAS capacitaciones del año. Se dictan en formato intensivo: dos clases por semana (lunes y jueves) durante un mes, 8 clases en total, del 16/11 al 10/12. Las próximas comisiones recién serán en 2027. Cupos limitados: conviene reservar por WhatsApp de capacitaciones.
1. Experto en IA · Nivel I (última comisión del año, intensivo). Uso práctico de IA en el trabajo, los estudios, la creación de contenido y la productividad. Nivel inicial–intermedio, presencial. Lunes de 16 a 18 h y jueves de 14 a 16 h, del lunes 16/11 al jueves 10/12 (8 clases). Detalle: /experto_ia_nivel_1
2. Experto en IA · Nivel II (última comisión del año, intensivo). Agentes, asistentes personalizados, automatización y aplicación estratégica de IA. Intermedio–avanzado, laboratorio aplicado. Lunes y jueves de 16 a 18 h, del 16/11 al 10/12 (8 clases). Detalle: /experto_ia_nivel_2
3. Programador Experto con IA. Taller continuo de desarrollo de aplicaciones, webs, sistemas, bases de datos y automatizaciones con IA como copiloto. Jueves 18 a 22 h. Detalle: /programador_experto_ia
4. Programador Teens con IA. Taller continuo para adolescentes: programación, videojuegos, diseño digital y proyectos con IA. Miércoles 14 a 16 h. Detalle: /programador_teens_ia
5. Robótica Kids. Taller continuo para chicos y chicas: robótica educativa, circuitos, programación, diseño 3D e IA. Sábados 10 a 12 h. Detalle: /robotica_kids
6. QGIS Inicial. Sistemas de Información Geográfica: visualización, edición, análisis y cartografía. 8 clases, presencial o virtual. Lunes 18 a 20 h, inicio 16/11. Detalle: /qgis
7. WeekClass · De 0 a Producción. Semana intensiva: de la idea a una solución funcional con IA, diseño, programación y automatización. Lunes a viernes 14 a 17 h, del 16 al 20 de noviembre. Detalle: /weekendclass
8. Revit + Inteligencia Artificial. Modelado BIM, documentación técnica y optimización de proyectos de arquitectura. Martes 18 a 21 h, inicio 17/11. Detalle: /revit_ia
9. Secretariado Odontológico Inteligente. Gestión de consultorios odontológicos con herramientas digitales e IA. Comisión A: lunes 14 a 16 h, inicio 16/11. Comisión B: jueves 16 a 18 h, inicio 19/11. Detalle: /secretariado_odontologico
10. Secretariado Médico Inteligente. Gestión administrativa de clínicas y consultorios con IA. Lunes, inicio 16/11, horario a confirmar. Detalle: /secretariado_medico

También hay capacitación in company para equipos, instituciones y empresas, con contenidos adaptados.
Los precios de los cursos no están publicados: para valores e inscripción se consulta por WhatsApp de capacitaciones.

# Inteligencia Operativa (IO)
Página: /inteligencia-operativa
La Inteligencia Operativa convierte la tecnología en resultados medibles para empresas e instituciones: Implementar, Acompañar, Medir y Mejorar. No es capacitación genérica, ni venta de IA, ni automatización aislada: es capacidad organizacional para transformarse. Premisa: PERSONA + IA > PERSONA.
Cómo la implementamos: 1) análisis de procesos (IEC & Co+nexus), 2) diseño de la solución (negocio + tecnología), 3) desarrollo con IA (La FactorIA), 4) implementación, formación en el puesto y medición antes y después.
Qué se implementa: sistemas ERP, asistentes de IA por WhatsApp, e-commerce inteligente, automatizaciones, campus virtual, tableros e indicadores.
Metodología propia SMARTEO 3.0, en ocho estaciones: Descubrir, Redescubrir, Visibilizar, Cuestionar, Aumentar, Rediseñar, Conectar y Transformar.
Medición propia: IPO (Índice de Potencial de Optimización, 0 a 100, indica por dónde empezar), IIO (Índice de Inteligencia Operativa, madurez de la organización) y horas humanas de alto valor liberadas.
Reglas de trabajo: confidencialidad por escrito antes de cada diagnóstico, datos personales según Ley 25.326, IA con control humano y responsables explícitos.
Productos propios: ODO IO (sistema inteligente operativo para odontólogos) y ComercIA Inteligente (programa con CeCIP para comercios y pymes de Paraná, con ERP y webapp desarrollados por IEC).
Para empezar se pide un diagnóstico de Inteligencia Operativa por el WhatsApp de empresas.

# Quiénes somos
Página: /quienes-somos
- Goró Agustín: fundador y CEO de IEC, director general del ecosistema. Técnico en electrónica, más de 20 años de docencia técnica, profesor de Programador Experto con IA en UTN.
- Marcelo Pérez: socio fundador de Co+nexus. Más de 25 años en dirección comercial y relaciones institucionales.
- María Paula Acebal: relaciones públicas y desarrollo comercial. Más de 20 años en ventas, comunicación y vinculación institucional. Lic. en Relaciones Públicas.
- Raúl Stoppello: arquitecto, socio de Co+nexus y growth partner. Diseña estructuras de funcionamiento que integran procesos, personas y datos.
- Pablo Lescano: desarrollo institucional y relaciones políticas y comerciales. Articulación gubernamental y comunicación estratégica; fortalece vínculos entre el sector público, empresas e iniciativas de impacto.
La FactorIA es el equipo de desarrollo: un grupo de profesionales de distintas áreas que saben programar y desarrollan según las necesidades de cada proyecto. Lo dirige Goró Agustín. Profesionales: Sandra Luvino (ingeniera química, más de 33 años en optimización de procesos productivos), Yusleydi Castillo (contadora), Federico Saucedo (licenciado en marketing, especialista en SEO) y Pablo Becker (licenciado en marketing, especialista en ventas de intangibles). Desarrolladores: Rodrigo Frison, Damián Fernández, Daniel Carbonell y Leonel Szpizack.

# Confían en nosotros
Página: /confian
- Implementación: Mutual Eco (implementación de Inteligencia Operativa y sistema inteligente), Instituto Bioquímico Privado (ERP de RR. HH. y contaduría con IA, en producción), SIL Servicio Integral de Limpieza (ERP, en producción), CeCIP (convenio ComercIA Inteligente), American English Institute (ERP y campus virtual, en implementación), Dr Tecno (e-commerce con IA), Aroma (e-commerce y asistente de IA por WhatsApp).
- Capacitación en IA para equipos: Unimédica, FEMER, Red Rural, COP Paraná y Municipalidad de Paraná (oficios con IA).
- Proyectos en desarrollo: DJ Consultora, Fundación Lazos y Delta 3.
- Eventos y alianzas: Campus Party Argentina; Mutual Entrerriana 16 de Septiembre (convenio de trabajo mutuo); Polo Tecnológico Paraná.

# Otras páginas
Novedades y eventos: /novedades. Contacto y formulario: /contacto.
`;
