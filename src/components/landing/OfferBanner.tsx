import { Clock } from "lucide-react";

const OfferBanner = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="bg-gradient-gold text-primary-foreground py-2.5 px-4 text-center sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Clock className="w-4 h-4 animate-pulse-soft" />
        <span className="text-xs sm:text-sm font-semibold">
          🔥 Oferta Válida Somente Hoje ({formattedDate}) 🔥
        </span>
      </div>
    </div>
  );
};

export default OfferBanner;