import { Award, Code2, Database, Layout, Server, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: "React / Next.js", icon: Code2 },
    { name: "C# / .NET", icon: Server },
    { name: "TypeScript", icon: Code2 },
    { name: t("skills.databases"), icon: Database },
    { name: "API REST", icon: Layout },
    { name: "Git / GitHub", icon: Code2 },
    { name: t("skills.awsAI"), icon: Sparkles },
    { name: t("skills.awsCert"), icon: Award },
  ];

  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("skills.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth animate-scale-in flex items-center gap-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
