const Buttons = ({ onClick, rock, paper, scissors }) => {
  return (
    <>
      <main className="flex w-full flex-col">
        <div className="flex flex-col bg-triangle bg-center bg-no-repeat md:gap-10">
          <div className="flex justify-center gap-4 md:gap-20">
            <button
              onClick={() => onClick("paper")}
              className="~sm/md:~p-4/8 rounded-full bg-gradient-to-t from-paperGradientStart to-paperGradientEnd"
            >
              <div className="~sm/md:~h-32/40 ~sm/md:~w-32/40 flex items-center justify-center rounded-full bg-white">
                <img src={paper} />
              </div>
            </button>
            <button
              onClick={() => onClick("scissors")}
              className="~sm/md:~p-4/8 rounded-full bg-gradient-to-t from-scissorsGradientStart to-scissorsGradientEnd"
            >
              <div className="~sm/md:~h-32/40 ~sm/md:~w-32/40 flex items-center justify-center rounded-full bg-white">
                <img src={scissors} />
              </div>
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => onClick("rock")}
              className="~sm/md:~p-4/8 rounded-full bg-gradient-to-t from-rockGradientStart to-rockGradientEnd"
            >
              <div className="~sm/md:~h-32/40 ~sm/md:~w-32/40 flex items-center justify-center rounded-full bg-white">
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
