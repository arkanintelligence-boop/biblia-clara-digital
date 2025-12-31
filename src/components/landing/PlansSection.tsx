import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const PlansSection = () => {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  const basicFeatures = [
    "Mapas mentais dos Apóstolos",
    "Mapa do Pentateuco",
    "Milagres de Jesus para colorir",
    "Caderno de oração e jogos",
  ];

  const premiumFeatures = [
    "Tudo do Plano Básico",
    "7 Sacramentos e Advento",
    "60 dinâmicas e gincanas",
    "Novo e Velho Testamento ilustrados",
    "Quizzes e parábolas",
    "Bônus exclusivos",
  ];

  const handleBasicClick = () => {
    setShowUpsellModal(true);
  };

  const handleAcceptPremium = () => {
    setShowUpsellModal(false);
    window.open("#premium-checkout", "_blank");
  };

  const handleDeclineUpsell = () => {
    setShowUpsellModal(false);
    window.open("#basic-checkout", "_blank");
  };

  return (
    <>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full text-xs mb-4">
              Escolha Seu Plano
            </span>
            <h2 className="text-xl font-bold text-foreground mb-2">
              O que você <span className="text-gradient-gold">recebe</span>
            </h2>
          </div>

          {/* Plans Grid */}
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            {/* Premium Plan - First on mobile */}
            <div className="relative bg-card rounded-2xl p-5 shadow-card border-2 border-primary order-1">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-gold text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-soft">
                  <Star className="w-3.5 h-3.5" />
                  Mais Escolhido
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1 mt-2">
                Plano Premium
              </h3>
              <p className="text-xs text-muted-foreground mb-4">O acervo completo para você</p>
              
              <ul className="space-y-2.5 mb-5">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="cta" size="default" className="w-full text-sm">
                Escolher Premium
              </Button>
            </div>

            {/* Basic Plan */}
            <div className="bg-card rounded-2xl p-5 shadow-card border border-border/50 order-2">
              <h3 className="text-lg font-bold text-foreground mb-1">
                Plano Básico
              </h3>
              <p className="text-xs text-muted-foreground mb-4">Para começar sua jornada</p>
              
              <ul className="space-y-2.5 mb-5">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="ctaOutline" size="default" className="w-full text-sm" onClick={handleBasicClick}>
                Escolher Básico
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Modal */}
      <Dialog open={showUpsellModal} onOpenChange={setShowUpsellModal}>
        <DialogContent className="max-w-[90vw] rounded-2xl p-5">
          <DialogHeader className="text-center">
            <DialogTitle className="text-xl font-bold text-foreground text-center">
              Espere! 🎁
            </DialogTitle>
            <DialogDescription className="text-center text-sm pt-2 text-foreground/80">
              Certeza que quer escolher esse plano?
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 text-center">
            <p className="text-sm text-foreground mb-3">
              Você agora tem um{" "}
              <span className="font-bold text-primary">desconto exclusivo</span>
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-muted-foreground line-through text-base">R$ 27,90</span>
              <span className="text-2xl font-bold text-gradient-gold">R$ 17,90</span>
            </div>
            <p className="text-xs text-muted-foreground font-semibold">
              ⚡ Apenas agora, só para você!
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Button 
              variant="cta" 
              size="default" 
              className="w-full text-sm animate-pulse-soft"
              onClick={handleAcceptPremium}
            >
              ✨ Sim, quero o Premium agora
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full text-muted-foreground hover:text-foreground text-xs"
              onClick={handleDeclineUpsell}
            >
              Não, quero o básico mesmo
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlansSection;
