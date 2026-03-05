import { Mail, Phone, Github, Linkedin, Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("lingurinijulian.dev@gmail.com");
      setIsCopied(true);

      // Vuelve al estado original después de 2 segundos
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Error al copiar el email: ", err);
    }
  };
  return (
    <section id="contacto" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">

          {/* Título dinámico */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>

          {/* Descripción dinámica */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>

        </div>

        {/* Cambiamos el ancho máximo (max-w-3xl) para que las 4 tarjetas respiren bien */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* --- TARJETA DE EMAIL --- */}
          {/* --- TARJETA DE EMAIL (AHORA COPIA AL PORTAPAPELES) --- */}
          <button
            onClick={handleCopyEmail}
            className="flex flex-col items-center justify-center text-center gap-4 p-6 bg-background rounded-xl border hover:border-primary transition-all hover:shadow-md group w-full cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${isCopied ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'}`}>
              {isCopied ? <Check className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
            </div>
            <div>
              <h3 className={`font-semibold text-lg transition-colors ${isCopied ? 'text-green-600' : ''}`}>
                {isCopied ? t("contact.copy") : "Email"}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">lingurinijulian.dev@gmail.com</p>
            </div>
          </button>

          {/* --- TARJETA DE TELÉFONO / WHATSAPP --- */}
          <a
            href="https://wa.me/5492234214414"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center gap-4 p-6 bg-background rounded-xl border hover:border-primary transition-all hover:shadow-md group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mt-1">+54 9 223 421-4414</p>
            </div>
          </a>

          {/* --- TARJETA DE GITHUB --- */}
          <a
            href="https://github.com/JuliLingu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center gap-4 p-6 bg-background rounded-xl border hover:border-primary transition-all hover:shadow-md group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">GitHub</h3>
              <p className="text-muted-foreground text-sm mt-1">JuliLingu</p>
            </div>
          </a>

          {/* --- TARJETA DE LINKEDIN --- */}
          <a
            href="https://www.linkedin.com/in/julian-lingurini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center gap-4 p-6 bg-background rounded-xl border hover:border-primary transition-all hover:shadow-md group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <p className="text-muted-foreground text-sm mt-1">julian-lingurini</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;