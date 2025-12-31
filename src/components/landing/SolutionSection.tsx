import { BookOpen, Lightbulb, Sparkles } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Acervo Visual Completo",
      description: "+1.000 páginas ilustradas e organizadas por tema",
    },
    {
      icon: Lightbulb,
      title: "Pronto Para Usar",
      description: "Material estruturado para ensinar e estudar",
    },
    {
      icon: Sparkles,
      title: "Ideal Para Todos",
      description: "Perfeito para famílias, igrejas e ministérios",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full text-xs mb-4">
            A Solução
          </span>
          <h2 className="text-xl font-bold text-foreground mb-3 max-w-xs mx-auto">
            O Kit Bíblico Completo resolve isso{" "}
            <span className="text-gradient-gold">em minutos</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            Um acervo visual e organizado para transformar sua forma de ensinar
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-card border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-soft flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-0.5">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
