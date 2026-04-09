import { Code2, Languages, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Code2,
      title: t("about.fullstack"),
      description: t("about.fullstackDesc"),
    },
    {
      icon: Lightbulb,
      title: t("about.analytical"),
      description: t("about.analyticalDesc"),
    },
    {
      icon: Languages,
      title: t("about.languages"),
      description: t("about.languagesDesc"),
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("about.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground animate-fade-in-up">
            <p>
              {t("about.paragraph1")}
            </p>
            <p>
              {t("about.paragraph2")}
            </p>
            <p>
              {t("about.paragraph3")} <strong className="text-foreground">{t("about.nextjs")}</strong> {t("about.paragraph3b")} <strong className="text-foreground">{t("about.sql")}</strong> {t("about.paragraph3c")}
            </p>
            <p>
              {t("about.paragraph4")} <strong className="text-foreground">{t("about.proactive")}</strong>{t("about.paragraph4b")}
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
