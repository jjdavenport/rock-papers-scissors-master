const Buttons = ({ onClick, rock, paper, scissors }) => {
  return (
    <>
      <main className="flex w-full flex-col">
        <div className="bg-triangle bg-center bg-no-repeat">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onClick("paper")}
              className="rounded-full bg-gradient-to-t from-paperGradientStart to-paperGradientEnd p-4"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white">
                <img src={paper} />
              </div>
            </button>
            <button
              onClick={() => onClick("scissors")}
              className="rounded-full bg-gradient-to-t from-scissorsGradientStart to-scissorsGradientEnd p-4"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white">
                <img src={scissors} />
              </div>
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => onClick("rock")}
              className="rounded-full bg-gradient-to-t from-rockGradientStart to-rockGradientEnd p-4"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white">
                <img src={rock} />
              </div>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Buttons;
