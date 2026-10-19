import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import project1 from "@/assets/UrbanBarber.webp";
import project2 from "@/assets/ChapaDetail.webp";
import project3 from "@/assets/gestionOk.webp";
import project4 from "@/assets/AgenciaWeb.webp";
import project5 from "@/assets/NewSurfboards.webp";

const Projects = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());

    setSnapCount(api.scrollSnapList().length);
    onSelect();

    api.on("select", onSelect);
    api.on("reInit", () => {
      setSnapCount(api.scrollSnapList().length);
      onSelect();
    });

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const projects = [
    {
      title: t("projects.project1Title"),
      description: t("projects.project1Desc"),
      image: project1,
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "WebSockets", "Mercado Pago"],
      demo: "https://demo-barber.logabyte.com.ar/",
    },
    {
      title: t("projects.project2Title"),
      description: t("projects.project2Desc"),
      image: project2,
      technologies: ["Next.js", "MariaDB", "Prisma", "Auth.js", "Zod", "Tailwind CSS"],
      demo: "https://lavadero-web.vercel.app/",
    },
    {
      title: t("projects.project3Title"),
      description: t("projects.project3Desc"),
      image: project3,
      technologies: ["Next.js", "MySQL", "Prisma", "Auth.js", "Zod", "Tailwind CSS"],
      demo: "https://gestionok.vercel.app/",
    },
    {
      title: t("projects.project4Title"),
      description: t("projects.project4Desc"),
      image: project4,
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "Auth.js", "GitHub Actions"],
      demo: "https://concesionario-web-five.vercel.app/",
    },
    {
      title: t("projects.project5Title"),
      description: t("projects.project5Desc"),
      image: project5,
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "Auth.js", "Cloudinary"],
      demo: "https://newsurfboards.vercel.app/",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("projects.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full animate-scale-in"
          >
            <CarouselContent className="-ml-6 py-1">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full flex flex-col overflow-hidden border-border hover:shadow-elegant transition-smooth group">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden block"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <img
                        src={project.image}
                        alt=""
                        loading="lazy"
                        className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                      />
                    </a>

                    <CardContent className="p-6 gap-4 flex flex-col flex-1">
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
                      <Button
                        size="sm"
                        className="gradient-primary shadow-elegant w-fit mt-auto"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {t("projects.demo")}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10" />

              <div className="flex items-center gap-2">
                {Array.from({ length: snapCount }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`${t("projects.title")} ${index + 1}`}
                    aria-current={index === current}
                    className={`h-2 rounded-full transition-smooth ${
                      index === current
                        ? "w-6 bg-primary"
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <CarouselNext className="static translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
