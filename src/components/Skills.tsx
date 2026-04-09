import { Code2, Database, Layout, Server, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: "React / Next.js", icon: Code2 },
    { name: "C# / .NET", icon: Server },
    { name: "TypeScript", icon: Code2 },
    { name: "SQL / Bases de Datos", icon: Database },
    { name: "API REST", icon: Layout },
    { name: "Git / GitHub", icon: Code2 },
  ];

  const softSkills = [
    {
      icon: Zap,
      title: t("skills.proactivity"),
      description: t("skills.proactivityDesc"),
    },
    {
      icon: Users,
      title: t("skills.teamwork"),
      description: t("skills.teamworkDesc"),
    },
    {
      icon: Layout,
      title: t("skills.problemSolving"),
      description: t("skills.problemSolvingDesc"),
    },
    {
      icon: Code2,
      title: t("skills.continuousLearning"),
      description: t("skills.continuousLearningDesc"),
    },
    {
      icon: Server,
      title: t("skills.systemicThinking"),
      description: t("skills.systemicThinkingDesc"),
    },
    {
      icon: Database,
      title: t("skills.dataAnalysis"),
      description: t("skills.dataAnalysisDesc"),
    },
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {t("skills.technical")}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
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

            {/* Soft Skills */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {t("skills.soft")}
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
