import { Heart, Users, BookOpen, Cross, Sparkles } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    { icon: Heart, label: "Mães cristãs" },
    { icon: Users, label: "Professoras de Escola Dominical" },
    { icon: BookOpen, label: "Líderes de célula" },
    { icon: Cross, label: "Catequistas" },
    { icon: Sparkles, label: "Quem quer entender a Bíblia" },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full text-xs mb-4">
            Para Quem É
          </span>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Este Kit foi feito <span className="text-gradient-gold">para você</span>
          </h2>
        </div>

        {/* Audience List */}
        <div className="max-w-sm mx-auto mb-8">
          <div className="grid grid-cols-1 gap-2.5">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card rounded-xl p-3.5 shadow-card border border-border/50"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <audience.icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                </div>
                <span className="font-semibold text-sm text-foreground">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center">
          <p className="text-base text-foreground italic max-w-xs mx-auto">
            "Se você carrega um chamado, este kit é{" "}
            <span className="text-gradient-gold font-semibold">ferramenta — não gasto.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
