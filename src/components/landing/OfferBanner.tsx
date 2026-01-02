import { Timer } from "lucide-react";

const OfferBanner = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="bg-gradient-gold text-primary-foreground py-3 px-4 text-center sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Timer className="w-6 h-6 animate-pulse-soft" />
        <span className="text-sm sm:text-base font-bold">
          Oferta Válida Somente Hoje ({formattedDate})
        </span>
      </div>
    </div>
  );
};

export default OfferBanner;