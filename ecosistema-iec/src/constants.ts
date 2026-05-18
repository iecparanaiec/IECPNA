export interface Solution {
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/quienes-somos' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Capacitaciones', href: '/capacitaciones' },
  { label: 'Co+nexus', href: '/co-nexus' },
  { label: 'FactorIA', href: '/factor-ia' },
  { label: 'CafeterIA', href: '/cafeteria' },
  { label: 'Domótica', href: '/domotica' },
  { label: 'Noticias', href: '/noticias' },
  { label: 'Contacto', href: '/contacto' },
];

export const SOLUTIONS: Solution[] = [
  {
    title: "Automatización Empresarial",
    description: "Optimizamos procesos operativos mediante flujos de trabajo inteligentes y RPA.",
    icon: "Cpu",
    category: "Consultoría"
  },
  {
    title: "Inteligencia Artificial",
    description: "Implementación de modelos avanzados para toma de decisiones y análisis predictivo.",
    icon: "BrainCircuit",
    category: "Software"
  },
  {
    title: "Transformación Digital",
    description: "Modernización integral de la infraestructura y cultura tecnológica corporativa.",
    icon: "RefreshCw",
    category: "Consultoría"
  },
  {
    title: "Domótica",
    description: "Espacios inteligentes que aprenden de tus hábitos para máximo confort y eficiencia.",
    icon: "Home",
    category: "Infraestructura"
  },
  {
    title: "Seguridad Tecnológica",
    description: "Blindaje digital multiplataforma y sistemas de vigilancia inteligentes.",
    icon: "ShieldCheck",
    category: "Seguridad"
  },
  {
    title: "Eventos Inmersivos",
    description: "Experiencias de marca de alto impacto usando AR/VR y mapping cinematográfico.",
    icon: "Sparkles",
    category: "Experiencias"
  },
  {
    title: "Capacitación Corporativa",
    description: "Formación de alto nivel en robótica, IA y metodologías ágiles.",
    icon: "GraduationCap",
    category: "Educación"
  },
  {
    title: "Infraestructura",
    description: "Diseño y despliegue de redes robustas y centros de datos de última generación.",
    icon: "Server",
    category: "Infraestructura"
  }
];
