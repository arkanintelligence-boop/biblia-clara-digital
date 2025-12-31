import { Zap, Users, Smile, Eye, Heart } from "lucide-react";

const TransformationSection = () => {
  const transformations = [
    { icon: Zap, text: "Aulas prontas em minutos" },
    { icon: Users, text: "Mais engajamento" },
    { icon: Smile, text: "Estudo leve" },
    { icon: Eye, text: "Mais clareza bíblica" },
    { icon: Heart, text: "Menos estresse" },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full text-xs mb-4">
            Transformação
          </span>
          <h2 className="text-xl font-bold text-foreground mb-2">
            O que muda <span className="text-gradient-gold">depois do Kit</span>
          </h2>
        </div>

        {/* Transformations List */}
        <div className="max-w-sm mx-auto mb-8">
          <div className="grid grid-cols-2 gap-2.5">
            {transformations.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 bg-card rounded-xl p-3 shadow-card border border-border/50 ${index === transformations.length - 1 ? 'col-span-2' : ''}`}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground text-xs">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Quote */}
        <div className="text-center max-w-sm mx-auto">
          <div className="bg-card rounded-xl p-5 shadow-card border border-primary/20">
            <p className="text-base text-foreground leading-relaxed">
              "Você não compra PDFs.{" "}
              <span className="text-gradient-gold font-semibold">
                Você compra tempo, clareza e impacto.
              </span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
