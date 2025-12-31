import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Clara S.",
      role: "Mãe e Catequista",
      content: "O material é maravilhoso! Minhas aulas ficaram muito mais dinâmicas e as crianças adoram.",
      rating: 5,
    },
    {
      name: "Ana Paula R.",
      role: "Líder de Célula",
      content: "Eu passava horas preparando estudos. Agora, em minutos, tenho tudo pronto. Recomendo!",
      rating: 5,
    },
    {
      name: "Juliana M.",
      role: "Professora de Escola Dominical",
      content: "A organização do material é impecável. Finalmente algo completo e bonito. Vale cada centavo!",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full text-xs mb-4">
            Depoimentos
          </span>
          <h2 className="text-xl font-bold text-foreground mb-2">
            O que estão <span className="text-gradient-gold">dizendo</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 shadow-card border border-border/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-2.5 left-4">
                <div className="w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center shadow-soft">
                  <Quote className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-2 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-foreground leading-relaxed mb-3 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
