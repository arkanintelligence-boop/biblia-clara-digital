import { Button } from "@/components/ui/button";
import { Check, Clock, Gift, Sparkles, Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Downsell = () => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const navigate = useNavigate();

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

    const premiumFeatures = [
        "Tudo do Plano Básico",
        "7 Sacramentos em Mapas Mentais",
        "Livro do Advento",
        "60 Dinâmicas Bíblicas",
        "O Velho Testamento & Novo Testamento",
        "Discípulos de Jesus & Personagens Bíblicos",
        "🎁 Bônus: Gincana, Quiz e Parábolas"
    ];

    return (
        <div className="min-h-screen bg-navy text-primary-foreground font-sans selection:bg-gold/30">
            {/* Top Bar Urgency */}
            <div className="bg-gold text-white py-2 text-center text-[10px] md:text-sm font-black sticky top-0 z-[100] shadow-md border-b border-white/10">
                <div className="container mx-auto px-4 flex items-center justify-center gap-2">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    ESTA OFERTA ÚNICA EXPIRA EM: {formatTime(timeLeft)}
                </div>
            </div>

            <main className="container mx-auto px-4 py-8 md:py-16 max-w-2xl">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/35 rounded-full px-4 py-1.5 mb-6 animate-fade-in shadow-sm">
                        <Sparkles className="w-4 h-4 text-gold" />
                        <span className="text-[11px] md:text-xs font-black text-gold uppercase tracking-widest">Atenção Verificada</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-xl md:text-4xl font-black mb-4 leading-tight animate-fade-in-up md:px-0 px-2 uppercase italic">
                        ESPERE! Não deixe seu acesso <span className="text-gold">expirar agora... ⏳</span>
                    </h1>

                    <p className="text-[13px] md:text-lg text-primary-foreground/70 mb-8 max-w-lg animate-fade-in-up px-2" style={{ animationDelay: "0.1s" }}>
                        Vimos que você quase garantiu o seu <span className="text-white font-bold">Plano Premium</span>.
                        Não queremos que você fique de fora dessa transformação, por isso liberamos um
                        <span className="text-gold font-bold"> desconto final e exclusivo</span> para você finalizar agora.
                    </p>

                    {/* Offer Card */}
                    <div className="w-full bg-white/5 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 p-5 md:p-10 mb-8 relative animate-fade-in-up shadow-2xl" style={{ animationDelay: "0.2s" }}>

                        {/* Optimized Badge for Mobile */}
                        <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-gold text-white px-5 md:px-6 py-1 md:py-1.5 rounded-full font-black text-[10px] md:text-sm shadow-xl whitespace-nowrap z-10 border border-white/20">
                            LIBERADO: ÚLTIMA CHANCE
                        </div>

                        <div className="flex flex-col gap-6 md:gap-8 text-left mt-2">
                            <div className="w-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-gold p-1 rounded-md">
                                        <Star className="text-white fill-white w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    <h2 className="text-base md:text-2xl font-black uppercase tracking-tight">
                                        Plano Premium <span className="text-gold">Full</span>
                                    </h2>
                                </div>

                                <ul className="grid grid-cols-1 gap-3 md:gap-4 mb-2">
                                    {premiumFeatures.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="bg-gold/20 p-1 rounded-full flex-shrink-0 mt-0.5">
                                                <Check className="text-gold w-3 h-3 md:w-4 md:h-4" strokeWidth={4} />
                                            </div>
                                            <span className="text-[11px] md:text-base text-primary-foreground/90 font-bold leading-tight">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price Container - Fixed Mobile UI */}
                            <div className="bg-navy/60 p-5 md:p-8 rounded-2xl border border-white/10 text-center w-full shadow-inner">
                                <p className="text-[9px] md:text-xs text-primary-foreground/50 font-bold uppercase tracking-widest mb-1">
                                    DE R$ 47,00 POR APENAS
                                </p>
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    <span className="text-xs md:text-xl font-black text-gold">R$</span>
                                    <span className="text-3xl md:text-6xl font-black text-gold tracking-tighter">14</span>
                                    <span className="text-lg md:text-3xl font-black text-gold">,90</span>
                                </div>
                                <div className="inline-block bg-white/5 px-2 py-0.5 md:px-3 md:py-1 rounded-md border border-white/5">
                                    <p className="text-[9px] md:text-xs text-primary-foreground/60 font-medium">Acesso Vitalício + Atualizações</p>
                                </div>
                            </div>
                        </div>

                        {/* Button Fix - No Overflow */}
                        <Button
                            size="lg"
                            className="w-full mt-6 md:mt-8 bg-gold hover:bg-gold-light text-white font-black text-[12px] md:text-xl py-5 md:py-8 rounded-xl md:rounded-2xl shadow-[0_10px_30px_rgba(188,133,45,0.3)] transition-all hover:scale-[1.01] active:scale-[0.98] animate-pulse-soft border-b-4 border-gold-dark"
                            onClick={handleCheckout}
                        >
                            SIM, QUERO O PREMIUM COM DESCONTO!
                            <ArrowRight className="ml-1 md:ml-2 w-4 h-4 md:w-6 md:h-6" />
                        </Button>

                        <div className="mt-6 grid grid-cols-2 gap-4 text-primary-foreground/40 text-[8px] md:text-[11px] font-bold uppercase tracking-wider border-t border-white/5 pt-6">
                            <div className="flex items-center justify-center gap-1.5 md:gap-2">
                                <Gift className="w-3 h-3 md:w-4 md:h-4" />
                                Acesso Imediato
                            </div>
                            <div className="flex items-center justify-center gap-1.5 md:gap-2">
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                Garantia de 7 Dias
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate("/")}
                        className="text-primary-foreground/30 hover:text-gold text-[9px] md:text-xs font-bold uppercase tracking-widest transition-colors mb-4"
                    >
                        Não, quero perder essa oportunidade única
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Downsell;
