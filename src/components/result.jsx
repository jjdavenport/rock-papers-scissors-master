const Result = ({ onClick, result }) => {
  return (
    <>
      <div className="flex w-fit flex-col items-center ~sm/md:~gap-2/6">
        <h3 className="whitespace-nowrap uppercase text-white ~sm/lg:~text-5xl/6xl">{`You ${result}`}</h3>
        <button
          className="z-10 w-full rounded-md bg-white font-bold uppercase tracking-widest text-radialGradientEnd transition-colors duration-300 ease-in-out hover:text-rockGradientStart ~sm/md:~py-2/3 ~sm/lg:~text-base/xl"
          onClick={onClick}
        >
          Play Again
        </button>
      </div>
    </>
  );
};

export default Result;
