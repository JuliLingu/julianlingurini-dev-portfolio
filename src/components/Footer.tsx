import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-center flex items-center gap-2">
            {t("footer.madeWith")} <Heart className="w-4 h-4 text-primary fill-primary" /> {t("footer.by")}
          </p>
          <p className="text-xs text-muted opacity-70">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
