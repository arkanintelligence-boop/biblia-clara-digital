import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "+1.000 páginas ilustradas",
    "Prepare aulas em minutos",
    "Material organizado",
    "Acesso imediato",
  ];

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] bg-navy overflow-hidden">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 py-12 flex flex-col items-center text-center justify-center min-h-[100svh]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary-foreground">Oferta válida somente hoje</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground leading-tight mb-5 max-w-md animate-fade-in-up">
          Ensinar a Palavra de Deus Nunca Foi Tão Fácil{" "}
          <span className="text-gradient-gold">— Nem Tão Profundo</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-primary-foreground/80 max-w-sm mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          O Kit Bíblico Visual que está transformando estudos, aulas e famílias cristãs em todo o Brasil
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-in-up w-full max-w-md" style={{ animationDelay: "0.2s" }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-primary-foreground/20">
              <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-primary-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up w-full max-w-sm" style={{ animationDelay: "0.3s" }}>
          <Button 
            variant="cta" 
            size="lg" 
            className="w-full mb-4 text-base py-6"
            onClick={scrollToPlans}
          >
            Quero Acessar o Kit Bíblico Agora
          </Button>
          <p className="text-sm text-primary-foreground/70">
            Pagamento seguro • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;