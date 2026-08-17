import React, { createContext, useContext, useState, ReactNode } from "react";

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

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("es");

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
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy Julián Lingurini",
      title: "Construyendo experiencias digitales",
      titleHighlight: "intuitivas",
      subtitle: "Desarrollador de Software y Analista de Sistemas especializado en Next.js y SQL",
      viewProjects: "Ver mis proyectos",
      contactMe: "Contactarme",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      paragraph1: "Soy Julián Lingurini, Desarrollador de Software y Analista de Sistemas. Me especializo en el diseño e implementación de soluciones tecnológicas escalables orientadas a optimizar procesos de negocio y mejorar la eficiencia operativa.",
      fullstack: "Desarrollo Full Stack",
      fullstackDesc: "Especializado en crear soluciones completas desde el frontend hasta el backend",
      analytical: "Pensamiento Analítico",
      analyticalDesc: "Enfoque sistemático para resolver problemas complejos con soluciones elegantes",
      languages: "Intercambio de Idiomas",
      languagesDesc: "Disponible para intercambio de idiomas: Español nativo e Inglés intermedio-avanzado",
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mis proyectos más recientes",
      project1Title: "Urban Barber - Sistema de Reservas",
      project1Desc: "Plataforma web para gestión de turnos de barbería. Permite a los clientes reservar servicios y administrar citas con un diseño moderno y urbano.",
      project2Title: "Chapa Detail - Lavadero Reservas",
      project2Desc: "Sistema de reservas ágil para lavadero de vehículos. Facilita la elección de servicios y optimiza la organización de turnos diarios.",
      project3Title: "Gestión OK - Control de Stock",
      project3Desc: "Aplicación eficiente e intuitiva para el control total de inventarios. Permite gestionar productos, categorías y optimizar la administración del stock.",
      project4Title: "Agencia Automóviles - Concesionario",
      project4Desc: "Sitio web para una agencia de automóviles. Presenta el catálogo de vehículos con fichas detalladas y un panel de administración para gestionar las publicaciones.",
      code: "Código",
      demo: "Demo",
    },
    skills: {
      title: "Habilidades",
      technical: "Competencias Técnicas",
      soft: "Habilidades Blandas",
      proactivity: "Proactividad",
      proactivityDesc: "Siempre buscando mejorar y aportar nuevas ideas",
      teamwork: "Trabajo en Equipo",
      teamworkDesc: "Colaboración efectiva y comunicación clara",
      problemSolving: "Resolución de Problemas",
      problemSolvingDesc: "Enfoque analítico y soluciones creativas",
      continuousLearning: "Aprendizaje Continuo",
      continuousLearningDesc: "Adaptación a nuevas tecnologías y metodologías",
      systemicThinking: "Pensamiento Sistémico",
      systemicThinkingDesc: "Visión integral de sistemas y arquitecturas",
      dataAnalysis: "Análisis de Datos",
      dataAnalysisDesc: "Capacidad para estructurar y optimizar información",
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
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Julián Lingurini",
      title: "Building intuitive",
      titleHighlight: "digital experiences",
      subtitle: "Software Developer and Systems Analyst specialized in Next.js and SQL",
      viewProjects: "View my projects",
      contactMe: "Contact me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      paragraph1: "I am Julián Lingurini, a Software Developer and Systems Analyst. I specialize in the design and implementation of scalable technological solutions oriented towards optimizing business processes and improving operational efficiency.",
      fullstack: "Full Stack Development",
      fullstackDesc: "Specialized in creating complete solutions from frontend to backend",
      analytical: "Analytical Thinking",
      analyticalDesc: "Systematic approach to solving complex problems with elegant solutions",
      languages: "Language Exchange",
      languagesDesc: "Available for language exchange: Native Spanish and Intermediate-Advanced English",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my most recent projects",
      project1Title: "Urban Barber - Booking System",
      project1Desc: "Web platform for barbershop appointment management. Allows clients to book services and manage appointments with a modern and urban design.",
      project2Title: "Chapa Detail - Car Wash Booking",
      project2Desc: "Agile booking system for car wash services. Facilitates the selection of services and optimizes the organization of daily appointments.",
      project3Title: "Gestión OK - Inventory Management",
      project3Desc: "Efficient and intuitive application for total inventory control. Allows managing products, categories, and optimizing stock administration.",
      project4Title: "Agencia Automóviles - Car Dealership",
      project4Desc: "Website for a car dealership. Showcases the vehicle catalog with detailed listings and an admin panel to manage the published units.",
      code: "Code",
      demo: "Demo",
    },
    skills: {
      title: "Skills",
      technical: "Technical Skills",
      soft: "Soft Skills",
      proactivity: "Proactivity",
      proactivityDesc: "Always seeking to improve and contribute new ideas",
      teamwork: "Teamwork",
      teamworkDesc: "Effective collaboration and clear communication",
      problemSolving: "Problem Solving",
      problemSolvingDesc: "Analytical approach and creative solutions",
      continuousLearning: "Continuous Learning",
      continuousLearningDesc: "Adaptation to new technologies and methodologies",
      systemicThinking: "Systemic Thinking",
      systemicThinkingDesc: "Comprehensive view of systems and architectures",
      dataAnalysis: "Data Analysis",
      dataAnalysisDesc: "Ability to structure and optimize information",
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
