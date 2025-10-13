import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-center flex items-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> por Julián Lingurini
          </p>
          <p className="text-xs text-muted opacity-70">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
