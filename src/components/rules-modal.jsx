import rulesImg from "./assets/image-rules.svg";
import closeIcon from "./assets/icon-close.svg";

const RulesModal = ({ onClose }) => {
  return (
    <>
      <dialog className="fixed inset-0 flex h-full min-h-screen w-full flex-col items-center justify-evenly">
        <span className="text-3xl uppercase">Rules</span>
        <img src={rulesImg} />
        <button onClick={onClose}>
          <img src={closeIcon} />
        </button>
      </dialog>
    </>
  );
};

export default RulesModal;
