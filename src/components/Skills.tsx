import { Code2, Database, Layout, Server, Users, Zap } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "React", level: 90 },
    { name: "C# / .NET", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "SQL / Bases de Datos", level: 85 },
    { name: "API REST", level: 90 },
    { name: "Git / GitHub", level: 85 },
  ];

  const softSkills = [
    {
      icon: Zap,
      title: "Proactividad",
      description: "Siempre buscando mejorar y aportar nuevas ideas",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva y comunicación clara",
    },
    {
      icon: Layout,
      title: "Resolución de Problemas",
      description: "Enfoque analítico y soluciones creativas",
    },
    {
      icon: Code2,
      title: "Aprendizaje Continuo",
      description: "Adaptación a nuevas tecnologías y metodologías",
    },
    {
      icon: Server,
      title: "Pensamiento Sistémico",
      description: "Visión integral de sistemas y arquitecturas",
    },
    {
      icon: Database,
      title: "Análisis de Datos",
      description: "Capacidad para estructurar y optimizar información",
    },
  ];

  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Habilidades
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Competencias Técnicas
              </h3>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary rounded-full transition-smooth animate-scale-in"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Habilidades Blandas
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <skill.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
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

export default Skills;
