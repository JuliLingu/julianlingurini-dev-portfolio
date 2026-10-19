import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Entry = {
  role: string;
  company: string;
  period: string;
  points: string[];
  technologies?: string[];
};

const work: Record<"es" | "en", Entry[]> = {
  es: [
    {
      role: "Ingeniero Full Stack",
      company: "JBJ Automotores · Freelance",
      period: "Jun 2026 — Ago 2026",
      points: [
        "Desarrollé de punta a punta la plataforma del concesionario: catálogo público y panel de administración.",
        "Autenticación con Auth.js v5, control de acceso por roles, limitación de intentos y validación con Zod.",
        "Pipeline de GitHub Actions con migraciones, lint, tipos, pruebas y build en cada push.",
      ],
      technologies: ["Next.js", "React", "Prisma", "MySQL", "GitHub Actions"],
    },
    {
      role: "Desarrollador Full Stack",
      company: "New SurfBoards · Freelance",
      period: "Abr 2026 — Jul 2026",
      points: [
        "Diseñé e implementé el configurador de tablas a medida, desde el modelo de datos hasta la interfaz.",
        "Panel de administración para que el cliente gestione las opciones sin depender de un desarrollador.",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Cloudinary"],
    },
    {
      role: "Desarrollador Full Stack",
      company: "Mayoraz Barber · Freelance",
      period: "Mar 2026 — May 2026",
      points: [
        "Bloqueo de turnos en tiempo real con WebSockets para evitar reservas duplicadas.",
        "Cobro de seña con Mercado Pago, expiración automática de turnos impagos y notificaciones por email.",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "WebSockets"],
    },
  ],
  en: [
    {
      role: "Full Stack Engineer",
      company: "JBJ Automotores · Freelance",
      period: "Jun 2026 — Aug 2026",
      points: [
        "Built the dealership's platform end-to-end: public catalog and admin panel.",
        "Authentication with Auth.js v5, role-based access control, rate limiting and Zod validation.",
        "GitHub Actions pipeline running migrations, lint, type-checking, tests and build on every push.",
      ],
      technologies: ["Next.js", "React", "Prisma", "MySQL", "GitHub Actions"],
    },
    {
      role: "Full Stack Developer",
      company: "New SurfBoards · Freelance",
      period: "Apr 2026 — Jul 2026",
      points: [
        "Designed and built the custom surfboard configurator, from the data model to the public interface.",
        "Admin panel that lets the client manage configurator options without developer intervention.",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Cloudinary"],
    },
    {
      role: "Full Stack Developer",
      company: "Mayoraz Barber · Freelance",
      period: "Mar 2026 — May 2026",
      points: [
        "Real-time slot locking with WebSockets to prevent duplicate bookings.",
        "Mercado Pago deposit payments, automatic expiration of unpaid bookings and email notifications.",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "WebSockets"],
    },
  ],
};

const education: Record<"es" | "en", Entry[]> = {
  es: [
    {
      role: "AWS Certified AI Practitioner",
      company: "Amazon Web Services",
      period: "2026",
      points: [],
    },
    {
      role: "Analista de Sistemas",
      company: "Instituto Argentino de la Empresa",
      period: "2025",
      points: [],
    },
  ],
  en: [
    {
      role: "AWS Certified AI Practitioner",
      company: "Amazon Web Services",
      period: "2026",
      points: [],
    },
    {
      role: "Systems Analyst",
      company: "Instituto Argentino de la Empresa",
      period: "2025",
      points: [],
    },
  ],
};

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("experience.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("experience.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Work timeline */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                {t("experience.work")}
              </h3>
              <ol className="relative border-l-2 border-primary/20 ml-3 space-y-10">
                {work[language].map((item) => (
                  <li key={item.company} className="pl-8 relative animate-fade-in-up">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h4 className="text-lg font-semibold text-foreground">{item.role}</h4>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                    </div>
                    <p className="text-primary font-medium text-sm">{item.company}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-4">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                {t("experience.education")}
              </h3>
              <div className="space-y-4">
                {education[language].map((item) => (
                  <div
                    key={item.role}
                    className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth animate-scale-in"
                  >
                    <h4 className="font-semibold text-foreground">{item.role}</h4>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                    <p className="text-xs text-primary font-medium mt-1">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
