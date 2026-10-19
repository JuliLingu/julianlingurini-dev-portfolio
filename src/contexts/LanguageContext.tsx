import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "language";

const getInitialLanguage = (): Language => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // localStorage no disponible (modo privado, etc.)
  }
  return "en";
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage no disponible
    }
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  es: {
    meta: {
      title: "Julián Lingurini - Desarrollador Full Stack & AI Engineer",
    },
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      roleFullstack: "Desarrollador Full Stack",
      roleAI: "AI Engineer",
      greeting: "Hola, soy Julián Lingurini",
      title: "Construyendo experiencias digitales",
      titleHighlight: "intuitivas",
      subtitle: "Desarrollador Full Stack & AI Engineer especializado en Next.js, SQL e integración de IA",
      viewProjects: "Ver mis proyectos",
      contactMe: "Contactarme",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      paragraph1: "Soy Julián Lingurini, Desarrollador Full Stack y AI Engineer, Analista de Sistemas con certificación AWS Certified AI Practitioner. Construyo plataformas web de punta a punta que resuelven problemas reales de negocio, desde sistemas de reservas con pagos online y bloqueo de turnos en tiempo real hasta catálogos y paneles de administración para concesionarias, con TypeScript, React, Next.js, Prisma y ASP.NET (C#). Combino el desarrollo full stack con la integración de soluciones de IA sobre AWS, y uso herramientas como Claude Code en mi flujo diario para acelerar la entrega sin resignar calidad.",
      fullstack: "Desarrollo Full Stack",
      fullstackDesc: "Especializado en crear soluciones completas desde el frontend hasta el backend",
      analytical: "Pensamiento Analítico",
      analyticalDesc: "Enfoque sistemático para resolver problemas complejos con soluciones elegantes",
      languages: "Idiomas",
      languagesDesc: "Español nativo, Inglés intermedio-avanzado",
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mis proyectos más recientes",
      project1Title: "Urban Barber - Sistema de Reservas",
      project1Desc: "Plataforma de reserva de turnos para barberías, desarrollada en equipo. Bloqueo de turnos en tiempo real con WebSockets para evitar reservas duplicadas, cobro de seña con Mercado Pago con expiración automática de turnos impagos y panel de administración con control de acceso por roles.",
      project2Title: "Chapa Detail - Lavadero Reservas",
      project2Desc: "Sistema de reservas ágil para lavadero de vehículos. Facilita la elección de servicios y optimiza la organización de turnos diarios.",
      project3Title: "Gestión OK - Control de Stock",
      project3Desc: "Aplicación eficiente e intuitiva para el control total de inventarios. Permite gestionar productos, categorías y optimizar la administración del stock.",
      project4Title: "Agencia Automóviles - Concesionario",
      project4Desc: "Plataforma de punta a punta para un concesionario: catálogo público y panel de administración con métricas del negocio. Autenticación con roles, limitación de intentos por IP y por cuenta, validación con Zod y un pipeline de GitHub Actions que corre lint, tipos, pruebas y build en cada push.",
      project5Title: "New SurfBoards - E-commerce y Configurador",
      project5Desc: "Plataforma de e-commerce e inventario para una tienda de surf. Incluye un configurador de tablas a medida, de punta a punta, y un panel de administración para que el cliente gestione las opciones sin depender de un desarrollador.",
      code: "Código",
      demo: "Demo",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Trabajos recientes y formación",
      work: "Experiencia laboral",
      education: "Formación",
    },
    skills: {
      title: "Habilidades",
      databases: "SQL / Bases de Datos",
      awsAI: "IA en AWS (Bedrock, SageMaker)",
      awsCert: "AWS Certified AI Practitioner",
    },
    contact: {
      title: "Contacto",
      description: "Puedes contactarme directamente a través de mi correo electrónico o por teléfono.",
      copy:"Copiado",
    },
    footer: {
      madeWith: "Hecho",
      by: "por Julián Lingurini",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    meta: {
      title: "Julián Lingurini - Full Stack Developer & AI Engineer",
    },
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      roleFullstack: "Full Stack Developer",
      roleAI: "AI Engineer",
      greeting: "Hi, I'm Julián Lingurini",
      title: "Building intuitive",
      titleHighlight: "digital experiences",
      subtitle: "Full Stack Developer & AI Engineer specialized in Next.js, SQL and AI integration",
      viewProjects: "View my projects",
      contactMe: "Contact me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      paragraph1: "I'm Julián Lingurini, a Full Stack Developer and AI Engineer, Systems Analyst and AWS Certified AI Practitioner. I build end-to-end web platforms that solve real business problems, from booking systems with online payments and real-time slot locking to dealership catalogs and admin panels, using TypeScript, React, Next.js, Prisma, and ASP.NET (C#). I combine full-stack development with AI solutions on AWS, and use tools like Claude Code in my daily workflow to ship faster without compromising quality.",
      fullstack: "Full Stack Development",
      fullstackDesc: "Specialized in creating complete solutions from frontend to backend",
      analytical: "Analytical Thinking",
      analyticalDesc: "Systematic approach to solving complex problems with elegant solutions",
      languages: "Languages",
      languagesDesc: "Native Spanish, Upper-Intermediate English",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my most recent projects",
      project1Title: "Urban Barber - Booking System",
      project1Desc: "Appointment booking platform for barbershops, built as part of a team. Real-time slot locking with WebSockets to prevent duplicate bookings, Mercado Pago deposit payments with automatic expiration of unpaid bookings, and a role-based admin panel.",
      project2Title: "Chapa Detail - Car Wash Booking",
      project2Desc: "Agile booking system for car wash services. Facilitates the selection of services and optimizes the organization of daily appointments.",
      project3Title: "Gestión OK - Inventory Management",
      project3Desc: "Efficient and intuitive application for total inventory control. Allows managing products, categories, and optimizing stock administration.",
      project4Title: "Agencia Automóviles - Car Dealership",
      project4Desc: "End-to-end platform for a car dealership: public catalog and an admin panel with business metrics. Role-based authentication, rate limiting by IP and by account, Zod validation, and a GitHub Actions pipeline running lint, type-checking, tests and build on every push.",
      project5Title: "New SurfBoards - E-commerce & Configurator",
      project5Desc: "E-commerce and inventory platform for a surf shop. Features an end-to-end custom surfboard configurator and an admin panel that lets the client manage its options without developer intervention.",
      code: "Code",
      demo: "Demo",
    },
    experience: {
      title: "Experience",
      subtitle: "Recent work and education",
      work: "Work experience",
      education: "Education",
    },
    skills: {
      title: "Skills",
      databases: "SQL / Databases",
      awsAI: "AI on AWS (Bedrock, SageMaker)",
      awsCert: "AWS Certified AI Practitioner",
    },
    contact: {
      title: "Contact",
      description: "You can contact me directly via email or phone.",
      copy:"Copied",
    },
    footer: {
      madeWith: "Made",
      by: "by Julián Lingurini",
      rights: "All rights reserved",
    },
  },
};
