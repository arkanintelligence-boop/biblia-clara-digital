import { AlertCircle, Clock, Frown, Shuffle } from "lucide-react";

const PainSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Falta de tempo",
      description: "Você passa horas pesquisando, mas nunca encontra material pronto",
    },
    {
      icon: Shuffle,
      title: "Materiais confusos",
      description: "PDFs gratuitos desorganizados e conteúdo superficial",
    },
    {
      icon: Frown,
      title: "Dificuldade de explicar",
      description: "Quer ensinar de forma clara, mas se sente despreparado",
    },
    {
      icon: AlertCircle,
      title: "Estudo cansativo",
      description: "A Bíblia parece difícil e você se sente perdido",
    },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2">
            A verdade que ninguém fala{" "}
            <span className="text-gradient-gold">(mas você sente)</span>
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto mb-8">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 shadow-card border border-border/50 flex items-start gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <pain.icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-0.5">
                  {pain.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-sm mx-auto">
          <div className="inline-block bg-card rounded-xl p-5 shadow-card border border-primary/20">
            <p className="text-base text-foreground italic">
              "Isso não é falta de fé.{" "}
              <span className="text-gradient-gold font-semibold">É falta de estrutura.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
