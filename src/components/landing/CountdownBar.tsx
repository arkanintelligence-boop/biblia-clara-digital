import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-navy py-4 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <div className="flex items-center gap-2 text-primary-foreground">
            <AlertTriangle className="w-5 h-5 text-primary animate-pulse-soft" />
            <span className="text-sm sm:text-base font-semibold">
              ⚠️ Oferta expira em:
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-3 py-1.5 min-w-[44px] text-center">
                <span className="text-xl sm:text-2xl font-bold text-primary-foreground">
                  {formatNumber(timeLeft.hours)}
                </span>
              </div>
              <span className="text-primary-foreground font-bold text-lg">:</span>
              <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-3 py-1.5 min-w-[44px] text-center">
                <span className="text-xl sm:text-2xl font-bold text-primary-foreground">
                  {formatNumber(timeLeft.minutes)}
                </span>
              </div>
              <span className="text-primary-foreground font-bold text-lg">:</span>
              <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-3 py-1.5 min-w-[44px] text-center">
                <span className="text-xl sm:text-2xl font-bold text-primary-foreground">
                  {formatNumber(timeLeft.seconds)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Restam poucas vagas!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBar;