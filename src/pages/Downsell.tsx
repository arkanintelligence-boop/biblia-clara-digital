import { Button } from "@/components/ui/button";
import { Check, Clock, Gift, Sparkles, Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Downsell = () => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleCheckout = () => {
        window.location.href = "https://www.ggcheckout.com/checkout/v4/tafXQ3NNWHhkEIYJi01q";
    };

    return (
        <div className="min-h-screen bg-navy text-primary-foreground font-sans">
            {/* Top Bar Urgency */}
            <div className="bg-gold text-white py-2 text-center text-sm font-bold animate-pulse">
                <div className="container mx-auto px-4 flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    ESTA OFERTA EXPIRA EM: {formatTime(timeLeft)}
                </div>
            </div>

            <main className="container mx-auto px-5 py-12 md:py-20 max-w-4xl">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-5 py-2 mb-8 animate-fade-in">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="text-sm md:text-base font-bold text-primary uppercase tracking-wider">Última Oportunidade</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight animate-fade-in-up">
                        ESPERE! Não Vá Embora Sem Ver{" "}
                        <span className="text-gradient-gold">Isso... 🎁</span>
                    </h1>

                    <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        Nós entendemos que talvez você não queira o kit completo agora. Por isso, preparamos uma
                        <span className="text-white font-bold text-gold"> oferta simbólica </span>
                        com o nosso material mais amado por professores e pais.
                    </p>

                    {/* Offer Card */}
                    <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-[2rem] border-2 border-gold/30 p-8 md:p-12 mb-12 relative animate-fade-in-up shadow-glow" style={{ animationDelay: "0.2s" }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold text-white px-8 py-2 rounded-full font-bold shadow-lg">
                            OFERTA EXCLUSIVA
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 text-left">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Star className="text-gold fill-gold w-6 h-6" />
                                    Combo Essencial Bíblico
                                </h2>
                                <ul className="space-y-4 mb-6">
                                    {[
                                        "Mapas Mentais dos 12 Apóstolos",
                                        "Gincana Bíblica para Crianças",
                                        "Quiz Bíblico Nível 1 e 2",
                                        "Acesso Vitalício em PDF"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="bg-gold/20 p-1 rounded-full">
                                                <Check className="text-gold w-4 h-4" strokeWidth={3} />
                                            </div>
                                            <span className="text-primary-foreground/90 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-navy/40 p-8 rounded-2xl border border-white/10 text-center min-w-[200px]">
                                <p className="text-sm text-primary-foreground/60 line-through mb-1">De R$ 47,00 por</p>
                                <div className="flex items-baseline justify-center gap-1 mb-4">
                                    <span className="text-lg font-bold text-gold">R$</span>
                                    <span className="text-5xl font-black text-gold">14</span>
                                    <span className="text-2xl font-bold text-gold">,90</span>
                                </div>
                                <p className="text-xs text-primary-foreground/50">Pagamento Único</p>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="w-full mt-8 bg-gold hover:bg-gold/90 text-white font-black text-xl py-8 rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] animate-bounce-soft"
                            onClick={handleCheckout}
                        >
                            SIM, QUERO ESSA OFERTA!
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>

                        <div className="mt-6 flex items-center justify-center gap-6 text-primary-foreground/40 text-xs">
                            <div className="flex items-center gap-1">
                                <Gift className="w-4 h-4" />
                                Acesso Imediato
                            </div>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-current" />
                                Garantia Incondicional
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => window.location.href = "/"}
                        className="text-primary-foreground/40 hover:text-primary-foreground/60 text-sm underline transition-colors"
                    >
                        Não, obrigado. Prefiro perder essa oportunidade.
                    </button>
                </div>
            </main>

            {/* Footer Branding */}
            <footer className="py-8 text-center text-primary-foreground/20 text-xs border-t border-white/5">
                &copy; {new Date().getFullYear()} Bíblia Clara Digital • Todos os direitos reservados
            </footer>
        </div>
    );
};

export default Downsell;
