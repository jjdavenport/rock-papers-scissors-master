const Result = ({ onClick, winner }) => {
  return (
    <>
      <div className="flex w-fit flex-col items-center gap-2">
        <h3 className="text-5xl uppercase text-white">
          {winner ? "You Win" : "You lose"}
        </h3>
        <button
          className="w-full rounded-md bg-white py-2 text-base uppercase tracking-widest text-radialGradientEnd"
          onClick={onClick}
        >
          Play Again
        </button>
      </div>
    </>
  );
};

export default Result;
