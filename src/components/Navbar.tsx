import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.about"), href: "#sobre-mi" },
    { label: t("nav.projects"), href: "#proyectos" },
    { label: t("nav.skills"), href: "#habilidades" },
    { label: t("nav.contact"), href: "#contacto" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-smooth"
          >
            JL
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === "es" ? "EN" : "ES"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 mt-2"
            >
              <Globe className="w-4 h-4" />
              {language === "es" ? "English" : "Español"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
