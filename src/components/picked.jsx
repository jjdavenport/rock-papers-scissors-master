import { useEffect } from "react";
import Result from "./result";

const Picked = ({
  picked,
  playerImage,
  playerChoice,
  computerChoice,
  computerImage,
  reset,
  result,
}) => {
  useEffect(() => {
    setTimeout;
  });

  return (
    <>
      <main className="flex w-full flex-col items-center gap-20">
        <div className="flex w-full flex-1">
          <div className="flex w-full flex-col items-center gap-4">
            {picked ? (
              <div
                className={`${playerChoice === "rock" && "from-rockGradientStart to-rockGradientEnd"} ${playerChoice === "paper" && "from-paperGradientStart to-paperGradientEnd"} ${playerChoice === "scissors" && "from-scissorsGradientStart to-scissorsGradientEnd"} rounded-full bg-gradient-to-t p-4`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                  <img src={playerImage} />
                </div>
              </div>
            ) : (
              <div className="h-36 w-36 rounded-full bg-radialGradientEnd"></div>
            )}
            <span className="uppercase tracking-widest text-white">
              You Picked
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            {picked ? (
              <div
                className={`${computerChoice === "rock" && "from-rockGradientStart to-rockGradientEnd"} ${computerChoice === "paper" && "from-paperGradientStart to-paperGradientEnd"} ${computerChoice === "scissors" && "from-scissorsGradientStart to-scissorsGradientEnd"} rounded-full bg-gradient-to-t p-4`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                  <img src={computerImage} />
                </div>
              </div>
            ) : (
              <div className="h-36 w-36 rounded-full bg-radialGradientEnd"></div>
            )}
            <span className="uppercase tracking-widest text-white">
              The House Picked
            </span>
          </div>
        </div>
        <Result winner={result} onClick={reset} />
      </main>
    </>
  );
};

export default Picked;
