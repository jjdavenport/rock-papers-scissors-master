const Buttons = ({ onClick, rock, paper, scissors }) => {
  return (
    <>
      <main className="flex w-full flex-col">
        <div className="flex flex-col bg-triangle bg-center bg-no-repeat ~sm/md:~gap-0/10">
          <div className="flex justify-center ~sm/md:~gap-6/20">
            <button
              onClick={() => onClick("paper")}
              className="rounded-full bg-gradient-to-t from-paperGradientStart to-paperGradientEnd ~sm/md:~p-4/8"
            >
              <div className="flex items-center justify-center rounded-full bg-white ~sm/md:~h-32/40 ~sm/md:~w-32/40">
                <img src={paper} />
              </div>
            </button>
            <button
              onClick={() => onClick("scissors")}
              className="rounded-full bg-gradient-to-t from-scissorsGradientStart to-scissorsGradientEnd ~sm/md:~p-4/8"
            >
              <div className="flex items-center justify-center rounded-full bg-white ~sm/md:~h-32/40 ~sm/md:~w-32/40">
                <img src={scissors} />
              </div>
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => onClick("rock")}
              className="rounded-full bg-gradient-to-t from-rockGradientStart to-rockGradientEnd ~sm/md:~p-4/8"
            >
              <div className="flex items-center justify-center rounded-full bg-white ~sm/md:~h-32/40 ~sm/md:~w-32/40">
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
