import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

const HeroSection = () => {
  const [viewers, setViewers] = useState(147);

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

  useEffect(() => {
    const vimeoScript = document.createElement('script');
    vimeoScript.src = "https://player.vimeo.com/api/player.js";
    vimeoScript.async = true;
    document.body.appendChild(vimeoScript);

    // Fake viewers update
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + change;
        return next < 120 ? 120 : next > 200 ? 200 : next;
      });
    }, 3000);

    return () => {
      document.body.removeChild(vimeoScript);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] bg-navy overflow-hidden py-12">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 flex flex-col items-center text-center justify-center min-h-[100svh]">
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

        {/* VSL (Video) */}
        <div className="w-full max-w-[350px] mx-auto mb-6 animate-fade-in-up shadow-glow p-2 md:p-3 bg-gold rounded-[2rem] md:rounded-[2.5rem]" style={{ animationDelay: "0.15s" }}>
          <div className="rounded-[1.5rem] md:rounded-[1.8rem] overflow-hidden bg-navy">
            <div style={{ padding: '148.33% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1151070974?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="vídeo-vsl"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Fake Viewers */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in text-primary-foreground/90 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10" style={{ animationDelay: "0.2s" }}>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <span className="text-sm font-medium">
            <span className="text-gold font-bold">{viewers}</span> pessoas vendo agora
          </span>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-in-up w-full max-w-md" style={{ animationDelay: "0.3s" }}>
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
