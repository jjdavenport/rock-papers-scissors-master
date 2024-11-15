import rulesImg from "./assets/image-rules.svg";
import { useEffect, useState } from "react";

const RulesModal = ({ onClose, desktop }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    return () => setActive(false);
  }, []);

  const close = () => {
    setActive(false);
    setTimeout(onClose, 300);
  };

  if (desktop) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
        <dialog
          className={`z-50 flex flex-col items-center justify-evenly gap-14 rounded-lg bg-white p-8 md:max-w-md md:transition-all md:duration-300 ${
            active ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <span className="text-4xl font-bold uppercase text-darkText">
              Rules
            </span>
            <button onClick={close} className="group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  className="fill-[#3B4262] opacity-25 transition-all duration-300 ease-in-out group-hover:fill-darkText group-hover:opacity-100"
                  d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <img src={rulesImg} alt="Rules" />
        </dialog>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <dialog
        className={`z-50 flex h-full w-full transform flex-col items-center justify-evenly bg-white p-6 transition-all duration-300 ${
          active ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:h-fit md:max-w-md`}
      >
        <span className="text-3xl font-bold uppercase text-darkText">
          Rules
        </span>
        <img src={rulesImg} alt="Rules" />
        <button onClick={close} className="group">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path
              className="fill-[#3B4262] opacity-25 transition-all duration-300 ease-in-out group-hover:fill-darkText group-hover:opacity-100"
              d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </dialog>
    </div>
  );
};

export default RulesModal;
