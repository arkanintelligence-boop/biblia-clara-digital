import { BookOpen, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-base font-bold">Kit Bíblico Completo</span>
          </div>

          {/* Info */}
          <p className="text-primary-foreground/70 mb-4 text-xs max-w-xs">
            Produto 100% digital com acesso imediato após confirmação do pagamento
          </p>

          {/* Support */}
          <div className="flex items-center gap-1.5 text-primary-foreground/70 mb-5">
            <Mail className="w-3.5 h-3.5" />
            <span className="text-xs">Suporte ao cliente disponível</span>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-primary-foreground/20 mb-5" />

          {/* Copyright */}
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Kit Bíblico Completo
          </p>
          <p className="text-xs text-primary-foreground/40 mt-1 flex items-center gap-1">
            Feito com <Heart className="w-2.5 h-2.5 fill-primary text-primary" /> para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
