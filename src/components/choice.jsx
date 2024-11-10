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
          <div className="absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5"></div>
          <div className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5"></div>
          <div className="absolute left-1/2 top-1/2 h-[290%] w-[290%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5"></div>
          <div
            className={`${
              choice === "rock"
                ? "from-rockGradientStart to-rockGradientEnd"
                : choice === "paper"
                  ? "from-paperGradientStart to-paperGradientEnd"
                  : "from-scissorsGradientStart to-scissorsGradientEnd"
            } relative z-10 rounded-full bg-gradient-to-t ~md/lg:~p-4/8`}
          >
            <div className="flex items-center justify-center rounded-full bg-white ~md/lg:~h-32/48 ~md/lg:~w-32/48">
              <img src={image} alt={choice} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            choice === "rock"
              ? "from-rockGradientStart to-rockGradientEnd"
              : choice === "paper"
                ? "from-paperGradientStart to-paperGradientEnd"
                : "from-scissorsGradientStart to-scissorsGradientEnd"
          } rounded-full bg-gradient-to-t ~md/lg:~p-4/8`}
        >
          <div className="flex items-center justify-center rounded-full bg-white ~md/lg:~h-32/48 ~md/lg:~w-32/48">
            <img src={image} alt={choice} />
          </div>
        </div>
      )}
    </>
  );
};

export default Choice;
