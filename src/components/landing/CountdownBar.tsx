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
    <div className="bg-gradient-navy py-3 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-primary-foreground">
            <AlertTriangle className="w-4 h-4 text-primary animate-pulse-soft" />
            <span className="text-xs sm:text-sm font-semibold">
              ⚠️ Oferta expira em:
            </span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[36px] text-center">
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">
                  {formatNumber(timeLeft.hours)}
                </span>
              </div>
              <span className="text-primary-foreground font-bold">:</span>
              <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[36px] text-center">
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">
                  {formatNumber(timeLeft.minutes)}
                </span>
              </div>
              <span className="text-primary-foreground font-bold">:</span>
              <div className="bg-primary/30 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[36px] text-center">
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">
                  {formatNumber(timeLeft.seconds)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-primary-foreground/80">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">Restam poucas vagas!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBar;