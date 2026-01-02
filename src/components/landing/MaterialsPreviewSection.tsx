import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const MaterialsPreviewSection = () => {
    const materials = [
        {
            title: "Jogo da Memória Bíblico",
            image: "/images/jogo memoria.jpeg",
        },
        {
            title: "Os Discípulos de Jesus",
            image: "/images/discipulos.jpeg",
        },
        {
            title: "Antigo Testamento",
            image: "/images/velho testamento.jpeg",
        },
        {
            title: "Novo Testamento",
            image: "/images/novo testamento.jpeg",
        },
        {
            title: "10 Mandamentos",
            image: "/images/10 mandamentos.jpeg",
        },
    ];

    return (
        <section className="py-8 md:py-16 bg-cream overflow-hidden">
            <div className="container mx-auto px-0 md:px-4">
                <div className="text-center mb-6 md:mb-12 px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2 md:mb-4">
                        Um Material <span className="text-gold">Completo e Ilustrado</span>
                    </h2>
                    <p className="text-navy/70 max-w-2xl mx-auto text-sm md:text-base">
                        Confira uma pequena amostra do que você encontrará dentro do nosso Kit Bíblico Visual.
                    </p>
                </div>

                <div className="relative w-full max-w-6xl mx-auto md:px-12">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2500,
                                stopOnInteraction: false,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {materials.map((item, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[92%] sm:basis-1/2 lg:basis-1/3">
                                    <div className="h-full px-1">
                                        <Card
                                            className="h-full overflow-hidden border-2 border-gold/20 shadow-card flex flex-col rounded-xl"
                                        >
                                            <div className="bg-gold py-3 px-4 text-center">
                                                <h3 className="text-white font-bold text-lg md:text-xl">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <div className="bg-white flex-1 flex items-center justify-center p-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-6 border-gold text-gold hover:bg-gold hover:text-white" />
                        <CarouselNext className="hidden md:flex -right-6 border-gold text-gold hover:bg-gold hover:text-white" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default MaterialsPreviewSection;
