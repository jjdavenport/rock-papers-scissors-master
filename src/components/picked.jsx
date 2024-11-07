const Picked = ({ picked, image, bg }) => {
  return (
    <>
      <main className="flex gap-10">
        <div className="flex flex-col items-center gap-4">
          {picked ? (
            <div
              className={`${bg === "rock" && "from-rockGradientStart to-rockGradientEnd"} ${bg === "paper" && "from-paperGradientStart to-paperGradientEnd"} ${bg === "scissors" && "from-scissorsGradientStart to-scissorsGradientEnd"} rounded-full bg-gradient-to-t p-4`}
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                <img src={image} />
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
            <div className="h-32 w-32 rounded-full bg-radialGradientEnd"></div>
          ) : (
            <button className="rounded-full bg-gradient-to-t from-paperGradientStart to-paperGradientEnd p-4">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white">
                <img src={image} />
              </div>
            </button>
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
