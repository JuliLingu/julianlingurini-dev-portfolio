import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Dashboard de Análisis de Datos",
      description:
        "Aplicación web construida con React que permite visualizar y analizar datos en tiempo real mediante gráficos interactivos y reportes personalizados.",
      image: project1,
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "API REST con C# y .NET",
      description:
        "Backend robusto desarrollado con C# y .NET Core para gestionar operaciones CRUD, autenticación JWT y conexión a bases de datos SQL Server.",
      image: project2,
      technologies: ["C#", ".NET Core", "SQL Server", "Entity Framework"],
      github: "#",
      demo: "#",
    },
    {
      title: "Sistema de Gestión Full Stack",
      description:
        "Aplicación completa de gestión empresarial con frontend en React y backend en C#, incluyendo módulos de inventario, ventas y reportes.",
      image: project3,
      technologies: ["React", "C#", ".NET", "PostgreSQL", "Azure"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Proyectos Destacados
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes que demuestran mis habilidades
              en desarrollo frontend y backend
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border hover:shadow-elegant transition-smooth animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4 gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="shadow-lg"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Código
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="gradient-primary shadow-lg"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
