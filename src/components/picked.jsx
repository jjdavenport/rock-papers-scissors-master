import { useEffect } from "react";
import Result from "./result";
import Empty from "./empty";
import Choice from "./choice";

const Picked = ({
  picked,
  playerImage,
  playerChoice,
  computerChoice,
  computerImage,
  reset,
  result,
  desktop,
}) => {
  useEffect(() => {
    setTimeout;
  });

  if (desktop) {
    return (
      <>
        <main className="~md/lg:gap-10/20 flex w-full flex-col items-center">
          <div className="flex items-center gap-10">
            <div className="flex flex-col items-center gap-4">
              <span className="uppercase tracking-widest text-white">
                You Picked
              </span>
              {picked ? (
                <Choice choice={playerChoice} image={playerImage} />
              ) : (
                <Empty />
              )}
            </div>
            <Result winner={result} onClick={reset} />
            <div className="flex flex-col items-center gap-4">
              <span className="uppercase tracking-widest text-white">
                The House Picked
              </span>
              {picked ? (
                <Choice choice={computerChoice} image={computerImage} />
              ) : (
                <Empty />
              )}
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="flex w-full flex-col items-center gap-20">
        <div className="flex w-full flex-1">
          <div className="flex w-full flex-col items-center gap-4">
            {picked ? (
              <Choice choice={playerChoice} image={playerImage} />
            ) : (
              <Empty />
            )}
            <span className="uppercase tracking-widest text-white">
              You Picked
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            {picked ? (
              <Choice choice={computerChoice} image={computerImage} />
            ) : (
              <Empty />
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
