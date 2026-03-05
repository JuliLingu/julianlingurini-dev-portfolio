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
      subtitle: "Desarrollador de Software y Analista de Sistemas especializado en React y C#",
      viewProjects: "Ver mis proyectos",
      contactMe: "Contactarme",
    },
    about: {
      title: "Sobre Mí",
      paragraph1: "Soy Julián Lingurini, un Desarrollador de Software y Analista de Sistemas apasionado por la tecnología y la creación de soluciones digitales que marcan la diferencia.",
      paragraph2: "Mi viaje en el mundo de la programación comenzó con la curiosidad de entender cómo funcionan las aplicaciones que usamos a diario. Esta curiosidad se transformó en una pasión por construir experiencias digitales que sean no solo funcionales, sino también intuitivas y agradables para los usuarios.",
      paragraph3: "Me especializo en el desarrollo con",
      react: "React",
      paragraph3b: "para crear interfaces de usuario modernas y reactivas, y",
      csharp: "C#",
      paragraph3c: "para desarrollar backends robustos y escalables. Mi enfoque como Analista de Sistemas me permite integrar la lógica de negocio con soluciones técnicas bien estructuradas.",
      paragraph4: "Soy una persona",
      proactive: "proactiva",
      paragraph4b: ", siempre buscando nuevas formas de mejorar y aprender. Disfruto trabajar en equipo y contribuir con ideas que impulsen proyectos hacia adelante.",
      fullstack: "Desarrollo Full Stack",
      fullstackDesc: "Especializado en crear soluciones completas desde el frontend hasta el backend",
      analytical: "Pensamiento Analítico",
      analyticalDesc: "Enfoque sistemático para resolver problemas complejos con soluciones elegantes",
      languages: "Intercambio de Idiomas",
      languagesDesc: "Disponible para intercambio de idiomas: Español nativo e Inglés intermedio-avanzado",
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de mis trabajos más recientes que demuestran mis habilidades en desarrollo frontend y backend",
      project1Title: "Dashboard de Análisis de Datos",
      project1Desc: "Aplicación web construida con React que permite visualizar y analizar datos en tiempo real mediante gráficos interactivos y reportes personalizados.",
      project2Title: "API REST con C# y .NET",
      project2Desc: "Backend robusto desarrollado con C# y .NET Core para gestionar operaciones CRUD, autenticación JWT y conexión a bases de datos SQL Server.",
      project3Title: "Sistema de Gestión Full Stack",
      project3Desc: "Aplicación completa de gestión empresarial con frontend en React y backend en C#, incluyendo módulos de inventario, ventas y reportes.",
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
      madeWith: "Hecho con",
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
      subtitle: "Software Developer and Systems Analyst specialized in React and C#",
      viewProjects: "View my projects",
      contactMe: "Contact me",
    },
    about: {
      title: "About Me",
      paragraph1: "I'm Julián Lingurini, a Software Developer and Systems Analyst passionate about technology and creating digital solutions that make a difference.",
      paragraph2: "My journey in the world of programming began with curiosity about how the applications we use daily work. This curiosity transformed into a passion for building digital experiences that are not only functional but also intuitive and enjoyable for users.",
      paragraph3: "I specialize in development with",
      react: "React",
      paragraph3b: "to create modern and reactive user interfaces, and",
      csharp: "C#",
      paragraph3c: "to develop robust and scalable backends. My approach as a Systems Analyst allows me to integrate business logic with well-structured technical solutions.",
      paragraph4: "I'm a",
      proactive: "proactive",
      paragraph4b: "person, always looking for new ways to improve and learn. I enjoy working in teams and contributing ideas that drive projects forward.",
      fullstack: "Full Stack Development",
      fullstackDesc: "Specialized in creating complete solutions from frontend to backend",
      analytical: "Analytical Thinking",
      analyticalDesc: "Systematic approach to solving complex problems with elegant solutions",
      languages: "Language Exchange",
      languagesDesc: "Available for language exchange: Native Spanish and Intermediate-Advanced English",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my most recent work demonstrating my frontend and backend development skills",
      project1Title: "Data Analytics Dashboard",
      project1Desc: "Web application built with React that allows visualizing and analyzing data in real-time through interactive charts and custom reports.",
      project2Title: "REST API with C# and .NET",
      project2Desc: "Robust backend developed with C# and .NET Core to manage CRUD operations, JWT authentication, and SQL Server database connection.",
      project3Title: "Full Stack Management System",
      project3Desc: "Complete business management application with React frontend and C# backend, including inventory, sales, and reporting modules.",
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
      madeWith: "Made with",
      by: "by Julián Lingurini",
      rights: "All rights reserved",
    },
  },
};
