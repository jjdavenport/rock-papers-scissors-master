const Choice = ({ choice, image }) => {
  return (
    <>
      <div
        className={`${choice === "rock" && "from-rockGradientStart to-rockGradientEnd"} ${choice === "paper" && "from-paperGradientStart to-paperGradientEnd"} ${choice === "scissors" && "from-scissorsGradientStart to-scissorsGradientEnd"} rounded-full bg-gradient-to-t ~md/lg:~p-4/8`}
      >
        <div className="flex items-center justify-center rounded-full bg-white ~md/lg:~h-32/48 ~md/lg:~w-32/48">
          <img src={image} />
        </div>
      </div>
    </>
  );
};

export default Choice;
