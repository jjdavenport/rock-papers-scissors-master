const Buttons = ({ onClick, rock, paper, scissors }) => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center">
        <div className="flex w-72 flex-col items-center bg-triangle bg-contain bg-center bg-no-repeat md:w-80">
          <div className="flex ~sm/md:~gap-8/16">
            <button
              onClick={() => onClick("paper")}
              className="rounded-full border-b-8 border-blueBorder bg-gradient-to-t from-paperGradientStart to-paperGradientEnd ~sm/md:~p-4/6 md:static"
            >
              <div className="flex items-center justify-center rounded-full border-t-8 bg-white ~sm/md:~h-28/36 ~sm/md:~w-28/36">
                <img className="mb-2 ~sm/md:~w-12/16" src={paper} />
              </div>
            </button>
            <button
              onClick={() => onClick("scissors")}
              className="rounded-full border-b-8 border-yellowBorder bg-gradient-to-t from-scissorsGradientStart to-scissorsGradientEnd ~sm/md:~p-4/6"
            >
              <div className="flex items-center justify-center rounded-full border-t-8 bg-white ~sm/md:~h-28/36 ~sm/md:~w-28/36">
                <img className="mb-2 ~sm/md:~w-12/16" src={scissors} />
              </div>
            </button>
          </div>
          <div className="flex">
            <button
              onClick={() => onClick("rock")}
              className="rounded-full border-b-8 border-redBorder bg-gradient-to-t from-rockGradientStart to-rockGradientEnd ~sm/md:~p-4/6"
            >
              <div className="flex items-center justify-center rounded-full border-t-8 bg-white ~sm/md:~h-28/36 ~sm/md:~w-28/36">
                <img className="mb-2 ~sm/md:~w-12/16" src={rock} />
              </div>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Buttons;
