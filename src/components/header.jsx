import logo from "./assets/logo.svg";

const Header = ({ score }) => {
  return (
    <>
      <header className="flex w-full justify-between p-4 md:w-9/12 lg:w-7/12">
        <div className="flex w-full justify-between rounded-lg p-4 outline outline-headerOutline ~sm/md:~outline-2/4 md:rounded-xl">
          <img src={logo} className="w-5/12 object-contain p-4 md:w-48" />
          <div className="flex flex-col items-center justify-center rounded-md bg-white ~sm/md:~p-2/4">
            <h1 className="uppercase tracking-widest text-scoreText ~sm/md:~text-base/2xl">
              Score
            </h1>
            <h2 className="font-bold text-darkText ~sm/md:~text-5xl/6xl">
              {score}
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
