import { Button } from "@/components/ui/button";
import { Check, Lock, Zap } from "lucide-react";

const FinalCTASection = () => {
  const benefits = [
    { icon: Zap, text: "Acesso imediato" },
    { icon: Lock, text: "Pagamento seguro" },
    { icon: Check, text: "Garantia 7 dias" },
  ];

  return (
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-sm mx-auto text-center">
          {/* Header */}
          <h2 className="text-xl font-bold text-foreground mb-3">
            Comece hoje a ensinar a Palavra{" "}
            <span className="text-gradient-gold">com clareza</span>
          </h2>

          <p className="text-sm text-muted-foreground mb-6">
            Junte-se a milhares de cristãos que já transformaram sua forma de estudar a Bíblia
          </p>

          {/* CTA Button */}
          <Button variant="cta" size="lg" className="w-full mb-5 text-sm">
            Quero Acessar o Kit Bíblico Agora
          </Button>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <benefit.icon className="w-3 h-3 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
