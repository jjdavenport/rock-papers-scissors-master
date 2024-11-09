const Result = ({ onClick, result }) => {
  return (
    <>
      <div className="flex w-fit flex-col items-center gap-2">
        <h3 className="text-5xl uppercase text-white">{`You ${result}`}</h3>
        <button
          className="w-full rounded-md bg-white py-2 text-base font-bold uppercase tracking-widest text-radialGradientEnd transition-colors duration-300 ease-in-out hover:text-rockGradientStart"
          onClick={onClick}
        >
          Play Again
        </button>
      </div>
    </>
  );
};

export default Result;
