import { Button } from "@/components/ui/button";
import { Star, Gift, Sparkles, Crown, Check } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import CountdownBar from "./CountdownBar";

const PlansSection = () => {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  const basicFeatures = [
    "12 Apóstolos em Mapas Mentais",
    "Pentateuco – Mapa da Bíblia",
    "Colorindo os Milagres de Jesus",
    "10 Mandamentos em Mapas Mentais",
    "Caderno de Oração",
    "Jogo da Memória Bíblico",
  ];

  const premiumFeatures = [
    "Tudo do Plano Básico",
    "7 Sacramentos em Mapas Mentais",
    "Livro do Advento",
    "60 Dinâmicas Bíblicas",
    "O Velho Testamento – Mapa Mental Ilustrado",
    "O Novo Testamento – Mapa Mental Ilustrado",
    "Discípulos de Jesus – Mapa Mental Completo",
    "Personagens da Bíblia – Kit Completo",
  ];

  const premiumBonuses = [
    "Bônus: Dinâmicas Bíblicas",
    "Bônus: Gincana Bíblica",
    "Bônus: Quiz Bíblico",
    "Bônus: As Parábolas de JESUS Explicadas",
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
      <CountdownBar />
      <section id="plans-section" className="py-12 bg-background scroll-mt-4">
        <div className="container mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Escolha Seu Plano
            </span>
            <h2 className="text-xl font-bold text-foreground mb-2">
              O que você <span className="text-gradient-gold">recebe</span>
            </h2>
          </div>

          {/* Plans Grid */}
          <div className="flex flex-col gap-6 max-w-sm mx-auto lg:flex-row lg:max-w-3xl lg:gap-6">
            {/* Basic Plan - First */}
            <div className="bg-card rounded-2xl p-4 sm:p-5 shadow-card border border-border/50 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                Plano Básico
              </h3>
              <p className="text-xs text-muted-foreground mb-3">Para começar sua jornada</p>
              
              {/* Price */}
              <div className="mb-4 p-2.5 sm:p-3 bg-secondary rounded-xl">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">R$</span>
                  <span className="text-xl sm:text-2xl font-bold text-foreground">10</span>
                  <span className="text-base sm:text-lg font-bold text-foreground">,00</span>
                </div>
                <p className="text-xs text-muted-foreground">Acesso vitalício</p>
              </div>
              
              <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="ctaOutline" size="default" className="w-full text-xs sm:text-sm" onClick={handleBasicClick}>
                Escolher Básico
              </Button>
            </div>

            {/* Premium Plan - Wrapper for badge visibility */}
            <div className="relative flex-1 pt-3">
              {/* Badge - Outside the card for visibility */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-gold text-primary-foreground px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-soft whitespace-nowrap">
                  <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Mais Escolhido
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl p-4 sm:p-5 pt-6 shadow-card border-2 border-primary overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-1 mt-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      Plano Premium
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">O acervo completo para você</p>
                  
                  {/* Price */}
                  <div className="mb-4 p-2.5 sm:p-3 bg-primary/10 rounded-xl border border-primary/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-muted-foreground">R$</span>
                      <span className="text-2xl sm:text-3xl font-bold text-gradient-gold">27</span>
                      <span className="text-base sm:text-lg font-bold text-gradient-gold">,90</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Acesso vitalício</p>
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                    {premiumFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                        </div>
                        <span className="text-xs sm:text-sm text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                    {premiumBonuses.map((bonus, index) => (
                      <li key={`bonus-${index}`} className="flex items-start gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs sm:text-sm">🎁</span>
                        </div>
                        <span className="text-xs sm:text-sm text-foreground font-medium">{bonus}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="cta" size="default" className="w-full text-xs sm:text-sm shadow-soft">
                    <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                    Escolher Premium
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Modal - Optimized for mobile */}
      <Dialog open={showUpsellModal} onOpenChange={setShowUpsellModal}>
        <DialogContent className="w-[92vw] max-w-sm rounded-2xl p-0 overflow-hidden border-primary/30">
          {/* Header with gradient */}
          <div className="bg-gradient-gold p-4 sm:p-5 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl font-bold text-primary-foreground text-center">
                Espere! 🎁
              </DialogTitle>
              <DialogDescription className="text-center text-xs sm:text-sm text-primary-foreground/90">
                Temos uma oferta especial para você!
              </DialogDescription>
            </DialogHeader>
          </div>
          
          <div className="p-4 sm:p-5">
            <div className="text-center mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-foreground mb-2 sm:mb-3">
                Você agora tem um{" "}
                <span className="font-bold text-primary">desconto exclusivo</span>
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-muted-foreground line-through text-base sm:text-lg">R$ 27,90</span>
                <div className="flex items-baseline">
                  <span className="text-xs text-primary">R$</span>
                  <span className="text-2xl sm:text-3xl font-bold text-gradient-gold">17</span>
                  <span className="text-base sm:text-lg font-bold text-gradient-gold">,90</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-destructive/10 text-destructive px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Economize R$ 10,00
              </div>
            </div>

            <div className="bg-secondary/50 rounded-xl p-2.5 sm:p-3 mb-3 sm:mb-4">
              <p className="text-xs text-center text-muted-foreground font-semibold">
                ⚡ Oferta válida apenas agora!
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Button 
                variant="cta" 
                size="default" 
                className="w-full text-xs sm:text-sm animate-pulse-soft shadow-soft py-2.5 sm:py-3"
                onClick={handleAcceptPremium}
              >
                <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Sim, quero o Premium por R$ 17,90
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-muted-foreground hover:text-foreground text-xs py-2"
                onClick={handleDeclineUpsell}
              >
                Não, quero o básico por R$ 10,00
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlansSection;