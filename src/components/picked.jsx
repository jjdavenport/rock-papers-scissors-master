const Picked = ({
  picked,
  playerImage,
  playerChoice,
  computerChoice,
  computerImage,
}) => {
  return (
    <>
      <main className="flex gap-10">
        <div className="flex flex-col items-center gap-4">
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
          <span className="uppercase tracking-wider text-white">
            You Picked
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
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
          <span className="uppercase tracking-wider text-white">
            The House Picked
          </span>
        </div>
      </main>
    </>
  );
};

export default Picked;
