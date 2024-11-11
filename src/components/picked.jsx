import { useEffect, useState } from "react";
import Result from "./result";
import Empty from "./empty";
import Choice from "./choice";

const Picked = ({
  playerImage,
  playerChoice,
  computerChoice,
  computerImage,
  reset,
  result,
  desktop,
}) => {
  const [active, setActive] = useState({
    computerChoice: false,
    result: false,
  });

  useEffect(() => {
    const computerTimer = setTimeout(() => {
      setActive((prev) => ({ ...prev, computerChoice: true }));
    }, 1000);

    const resultTimer = setTimeout(() => {
      setActive((prev) => ({ ...prev, result: true }));
    }, 2000);

    return () => {
      clearTimeout(computerTimer);
      clearTimeout(resultTimer);
    };
  }, []);

  if (desktop) {
    return (
      <main className="~md/lg:gap-10/20 flex w-full flex-col items-center">
        <div className="flex items-center ~sm/lg:~gap-10/16">
          <div className="flex flex-col items-center ~sm/lg:~gap-4/10">
            <span className="uppercase tracking-widest text-white ~sm/lg:~text-base/3xl">
              You Picked
            </span>
            <Choice
              winner={result === "Win"}
              choice={playerChoice}
              image={playerImage}
            />
          </div>
          {active.result && <Result result={result} onClick={reset} />}
          <div className="flex flex-col items-center ~sm/lg:~gap-4/10">
            <span className="uppercase tracking-widest text-white ~sm/lg:~text-base/3xl">
              The House Picked
            </span>
            {active.computerChoice ? (
              <Choice
                winner={result === "Lose"}
                choice={computerChoice}
                image={computerImage}
              />
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center gap-10">
      <div className="flex w-full items-center">
        <div className="flex w-full flex-col items-center gap-4">
          <Choice
            winner={result === "Win"}
            choice={playerChoice}
            image={playerImage}
          />
          <span className="uppercase tracking-widest text-white">
            You Picked
          </span>
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          {active.computerChoice ? (
            <Choice
              winner={result === "Lose"}
              choice={computerChoice}
              image={computerImage}
            />
          ) : (
            <Empty />
          )}
          <span className="uppercase tracking-widest text-white">
            The House Picked
          </span>
        </div>
      </div>
      {active.result && <Result result={result} onClick={reset} />}
    </main>
  );
};

export default Picked;
