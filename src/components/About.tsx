import { Code2, Languages, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desarrollo Full Stack",
      description: "Especializado en crear soluciones completas desde el frontend hasta el backend",
    },
    {
      icon: Lightbulb,
      title: "Pensamiento Analítico",
      description: "Enfoque sistemático para resolver problemas complejos con soluciones elegantes",
    },
    {
      icon: Languages,
      title: "Intercambio de Idiomas",
      description: "Disponible para intercambio de idiomas: Español nativo e Inglés intermedio-avanzado",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre Mí
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground animate-fade-in-up">
            <p>
              Soy Julián Lingurini, un Desarrollador de Software y Analista de Sistemas apasionado
              por la tecnología y la creación de soluciones digitales que marcan la diferencia.
            </p>
            <p>
              Mi viaje en el mundo de la programación comenzó con la curiosidad de entender cómo
              funcionan las aplicaciones que usamos a diario. Esta curiosidad se transformó en una
              pasión por construir experiencias digitales que sean no solo funcionales, sino también
              intuitivas y agradables para los usuarios.
            </p>
            <p>
              Me especializo en el desarrollo con <strong className="text-foreground">React</strong> para
              crear interfaces de usuario modernas y reactivas, y <strong className="text-foreground">C#</strong> para
              desarrollar backends robustos y escalables. Mi enfoque como Analista de Sistemas me
              permite integrar la lógica de negocio con soluciones técnicas bien estructuradas.
            </p>
            <p>
              Soy una persona <strong className="text-foreground">proactiva</strong>, siempre buscando nuevas
              formas de mejorar y aprender. Disfruto trabajar en equipo y contribuir con ideas que
              impulsen proyectos hacia adelante.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-card transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
