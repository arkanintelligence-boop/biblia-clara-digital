import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";
import heroBible from "@/assets/hero-bible.jpg";

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
    <section className="relative min-h-[100svh] bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBible}
          alt="Kit Bíblico Completo - Material ilustrado para estudo bíblico"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 py-12 flex flex-col items-center text-center justify-center min-h-[100svh]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-3 py-1.5 mb-6 animate-fade-in">
          <Clock className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary-foreground">Oferta válida somente hoje</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-primary-foreground leading-tight mb-4 max-w-sm animate-fade-in-up">
          Ensinar a Palavra de Deus Nunca Foi Tão Fácil{" "}
          <span className="text-gradient-gold">— Nem Tão Profundo</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm text-primary-foreground/80 max-w-xs mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          O Kit Bíblico Visual que está transformando estudos, aulas e famílias cristãs em todo o Brasil
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-2 mb-6 animate-fade-in-up w-full max-w-xs" style={{ animationDelay: "0.2s" }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-2.5 py-2 border border-primary-foreground/20">
              <div className="w-4 h-4 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 text-primary" />
              </div>
              <span className="text-xs text-primary-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up w-full max-w-xs" style={{ animationDelay: "0.3s" }}>
          <Button 
            variant="cta" 
            size="lg" 
            className="w-full mb-3 text-sm"
            onClick={scrollToPlans}
          >
            Quero Acessar o Kit Bíblico Agora
          </Button>
          <p className="text-xs text-primary-foreground/70">
            Pagamento seguro • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;