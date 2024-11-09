import logo from "./assets/logo.svg";

const Header = ({ score }) => {
  return (
    <>
      <header className="flex w-full justify-between p-4 md:w-9/12">
        <div className="outline-3 flex w-full justify-between rounded-lg p-4 outline outline-headerOutline">
          <img src={logo} className="w-5/12 object-contain p-4 md:w-52" />
          <div className="~sm/md:~p-2/4 flex flex-col items-center justify-center rounded-md bg-white">
            <h1 className="~sm/md:~text-base/2xl uppercase tracking-widest text-scoreText">
              Score
            </h1>
            <h2 className="~sm/md:~text-5xl/7xl font-bold text-darkText">
              {score}
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
