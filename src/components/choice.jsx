import { useEffect, useState } from "react";

const Choice = ({ choice, image, winner }) => {
  const [winnerEffect, setWinnerEffect] = useState(false);

  useEffect(() => {
    if (winner) {
      setWinnerEffect(true);
    }
  }, [winner]);

  return (
    <>
      {winnerEffect ? (
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.03]"></div>
          <div className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.02]"></div>
          <div className="absolute left-1/2 top-1/2 h-[290%] w-[290%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-[0.01]"></div>
          <div
            className={`${
              choice === "rock"
                ? "border-redBorder from-rockGradientStart to-rockGradientEnd"
                : choice === "paper"
                  ? "border-blueBorder from-paperGradientStart to-paperGradientStart"
                  : "border-yellowBorder from-scissorsGradientStart to-scissorsGradientEnd"
            } relative z-10 rounded-full border-b-8 bg-gradient-to-t ~md/lg:~p-4/10`}
          >
            <div className="flex items-center justify-center rounded-full border-t-[12px] bg-white ~md/lg:~h-32/60 ~md/lg:~w-32/60">
              <img className="mb-3 ~sm/lg:~w-12/28" src={image} alt={choice} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            choice === "rock"
              ? "border-redBorder from-rockGradientStart to-rockGradientEnd"
              : choice === "paper"
                ? "border-blueBorder from-paperGradientStart to-paperGradientEnd"
                : "border-yellowBorder from-scissorsGradientStart to-scissorsGradientEnd"
          } rounded-full border-b-8 bg-gradient-to-t ~md/lg:~p-4/10`}
        >
          <div className="flex items-center justify-center rounded-full border-t-[12px] bg-white ~md/lg:~h-32/60 ~md/lg:~w-32/60">
            <img className="mb-3 ~sm/lg:~w-12/28" src={image} alt={choice} />
          </div>
        </div>
      )}
    </>
  );
};

export default Choice;
