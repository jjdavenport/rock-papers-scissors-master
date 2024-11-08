import logo from "./assets/logo.svg";

const Header = ({ score }) => {
  return (
    <>
      <header className="flex w-full justify-between p-4 md:w-1/2">
        <div className="outline-3 flex w-full justify-between rounded-lg p-4 outline outline-headerOutline">
          <img src={logo} className="w-5/12 object-contain p-4 md:w-52" />
          <div className="flex flex-col items-center justify-center rounded-md bg-white px-4 py-2">
            <h1 className="uppercase tracking-wide text-scoreText">Score</h1>
            <h2 className="text-4xl font-bold text-darkText">{score}</h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
