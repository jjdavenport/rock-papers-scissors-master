import { useEffect, useState } from "react";

const Choice = ({ choice, image, winner }) => {
  const [winnerEffect, setWinnerEffect] = useState(false);

  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => {
        setWinnerEffect(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [winner]);

  const pulseClasses =
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-1000";

  return (
    <div className="relative">
      {winner && (
        <>
          <div
            className={`${pulseClasses} ${winnerEffect ? "h-[160%] w-[160%] opacity-[0.03]" : "h-[100%] w-[100%] opacity-0"}`}
          ></div>
          <div
            className={`${pulseClasses} ${winnerEffect ? "h-[220%] w-[220%] opacity-[0.02]" : "h-[100%] w-[100%] opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          ></div>
          <div
            className={`${pulseClasses} ${winnerEffect ? "h-[290%] w-[290%] opacity-[0.01]" : "h-[100%] w-[100%] opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          ></div>
        </>
      )}
      <div
        className={`${
          choice === "rock"
            ? "border-redBorder from-rockGradientStart to-rockGradientEnd"
            : choice === "paper"
              ? "border-blueBorder from-paperGradientStart to-paperGradientEnd"
              : "border-yellowBorder from-scissorsGradientStart to-scissorsGradientEnd"
        } relative z-10 rounded-full border-b-8 bg-gradient-to-t ~md/lg:~p-4/10`}
      >
        <div className="flex items-center justify-center rounded-full border-t-[12px] bg-white ~md/lg:~h-32/60 ~md/lg:~w-32/60">
          <img className="mb-3 ~sm/lg:~w-12/28" src={image} alt={choice} />
        </div>
      </div>
    </div>
  );
};

export default Choice;
