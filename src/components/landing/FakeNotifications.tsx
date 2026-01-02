import { useState, useEffect, useCallback } from "react";
import { Check, X } from "lucide-react";

const brazilianNames = [
  // Femininos
  "Larissa Dias", "Ana Paula Silva", "Maria Clara Santos", "Juliana Oliveira", "Fernanda Costa",
  "Camila Souza", "Beatriz Almeida", "Amanda Rodrigues", "Isabela Ferreira", "Gabriela Lima",
  "Mariana Pereira", "Rafaela Martins", "Carolina Gomes", "Letícia Barbosa", "Natália Ribeiro",
  "Patrícia Araújo", "Vanessa Carvalho", "Priscila Rocha", "Débora Nascimento", "Renata Vieira",
  // Masculinos
  "João Pedro Silva", "Lucas Oliveira", "Matheus Santos", "Gabriel Costa", "Rafael Souza",
  "Thiago Almeida", "Felipe Rodrigues", "Bruno Ferreira", "Gustavo Lima", "André Pereira",
  "Ricardo Martins", "Marcelo Gomes", "Eduardo Barbosa", "Rodrigo Ribeiro", "Carlos Araújo"
];

const brazilianCities = [
  { city: "São Paulo", state: "SP" },
  { city: "Rio de Janeiro", state: "RJ" },
  { city: "Belo Horizonte", state: "MG" },
  { city: "Salvador", state: "BA" },
  { city: "Brasília", state: "DF" },
  { city: "Fortaleza", state: "CE" },
  { city: "Curitiba", state: "PR" },
  { city: "Recife", state: "PE" },
  { city: "Porto Alegre", state: "RS" },
  { city: "Manaus", state: "AM" },
  { city: "Goiânia", state: "GO" },
  { city: "Belém", state: "PA" },
  { city: "Campo Grande", state: "MS" },
  { city: "Natal", state: "RN" },
  { city: "Maceió", state: "AL" },
  { city: "João Pessoa", state: "PB" },
  { city: "Florianópolis", state: "SC" },
  { city: "Vitória", state: "ES" },
  { city: "Cuiabá", state: "MT" },
  { city: "Teresina", state: "PI" },
  { city: "São Luís", state: "MA" },
  { city: "Aracaju", state: "SE" },
  { city: "Palmas", state: "TO" },
  { city: "Porto Velho", state: "RO" },
  { city: "Rio Branco", state: "AC" },
  { city: "Macapá", state: "AP" },
  { city: "Boa Vista", state: "RR" }
];

const timeAgo = [
  "Agora mesmo",
  "Há 2 minutos",
  "Há 5 minutos",
  "Há 10 minutos",
  "Há 15 minutos",
  "Há 20 minutos",
  "Há 25 minutos",
  "Há 30 minutos",
  "Há 35 minutos",
  "Há 40 minutos",
  "Há 45 minutos",
  "Há 50 minutos"
];

const plans = ["Premium", "Básico"];

interface Notification {
  id: number;
  name: string;
  city: string;
  state: string;
  plan: string;
  time: string;
  isExiting: boolean;
}

const FakeNotifications = () => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const generateNotification = useCallback((): Notification => {
    const randomName = brazilianNames[Math.floor(Math.random() * brazilianNames.length)];
    const randomLocation = brazilianCities[Math.floor(Math.random() * brazilianCities.length)];
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];
    const randomTime = timeAgo[Math.floor(Math.random() * timeAgo.length)];

    return {
      id: Date.now(),
      name: randomName,
      city: randomLocation.city,
      state: randomLocation.state,
      plan: randomPlan,
      time: randomTime,
      isExiting: false
    };
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(prev => prev ? { ...prev, isExiting: true } : null);
    setTimeout(() => {
      setIsVisible(false);
      setNotification(null);
    }, 500);
  }, []);

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(() => {
      setNotification(generateNotification());
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, [generateNotification]);

  useEffect(() => {
    if (!isVisible) return;

    // Auto hide after 5 seconds
    const hideTimeout = setTimeout(hideNotification, 5000);

    return () => clearTimeout(hideTimeout);
  }, [isVisible, hideNotification]);

  useEffect(() => {
    // Show new notification every 10 seconds
    const interval = setInterval(() => {
      if (!isVisible) {
        setNotification(generateNotification());
        setIsVisible(true);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isVisible, generateNotification]);

  if (!notification || !isVisible) return null;

  const isPremium = notification.plan === "Premium";

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[310px] z-50 ${notification.isExiting ? 'animate-slide-out-right' : 'animate-slide-in-right'
        }`}
    >
      <div className="bg-white border md:border-2 border-gold/20 rounded-xl shadow-card p-3 relative">
        <button
          onClick={hideNotification}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar notificação"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-2.5">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gold shadow-sm">
            <Check className="w-6 h-6 text-white" strokeWidth={4} />
          </div>

          <div className="flex-1 min-w-0 pr-4">
            <p className="text-[15px] md:text-[16px] font-bold text-navy truncate leading-tight">
              {notification.name}
            </p>
            <p className="text-[12px] text-navy font-bold leading-none mt-1">
              {notification.city}, {notification.state}
            </p>
            <p className="text-[13px] mt-1.5 leading-tight text-navy font-medium">
              Comprou o <span className="font-extrabold text-[#b38a3d]">Plano {notification.plan}</span>
            </p>
            <p className="text-[11px] text-navy font-semibold mt-1.5 opacity-70">
              {notification.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeNotifications;