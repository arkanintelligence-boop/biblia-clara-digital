import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-5">
        <div className="max-w-sm mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-card border border-primary/20 text-center">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-gold mx-auto mb-5 flex items-center justify-center shadow-soft">
              <ShieldCheck className="w-7 h-7 text-primary-foreground" />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-foreground mb-3">
              Risco zero:{" "}
              <span className="text-gradient-gold">garantia de 7 dias</span>
            </h2>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Se você não ficar satisfeito, basta enviar um e-mail em até 7 dias e devolvemos{" "}
              <strong>100% do seu investimento</strong>. Sem burocracia.
            </p>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-foreground">Compra 100% segura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
