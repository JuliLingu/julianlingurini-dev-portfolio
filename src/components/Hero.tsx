import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/julian-perfil.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">
                {t("hero.greeting")}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t("hero.title")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t("hero.subtitle")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="gradient-primary shadow-elegant hover:shadow-lg transition-smooth"
                onClick={() => scrollToSection("#proyectos")}
              >
                {t("hero.viewProjects")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => scrollToSection("#contacto")}
              >
                {t("hero.contactMe")}
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/JuliLingu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/julian-lingurini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Julián Lingurini - Desarrollador de Software"
                className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
