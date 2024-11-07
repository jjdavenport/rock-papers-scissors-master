import Header from "./components/header";
import Buttons from "./components/buttons";
import Rules from "./components/rules";
import { useState } from "react";
import RulesModal from "./components/rules-modal";
import Footer from "./components/footer";
import Picked from "./components/picked";
import paperIcon from "./components/assets/icon-paper.svg";
import scissorsIcon from "./components/assets/icon-scissors.svg";
import rockIcon from "./components/assets/icon-rock.svg";

function App() {
  const [score, setScore] = useState(0);
  const [rulesModal, setRulesModal] = useState(false);
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [picked, setPicked] = useState(false);
  const [image, setImage] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const play = (choice) => {
    setComputer(choices);
  };

  const pick = (picked) => {
    setPicked(true);
    setPlayer(picked);
    if (picked === "paper") {
      setImage(paperIcon);
    } else if (picked === "rock") {
      setImage(rockIcon);
    } else if (picked === "scissors") {
      setImage(scissorsIcon);
    }
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col gap-4 bg-gradient-to-b from-radialGradientStart to-radialGradientEnd font-custom text-base">
        <div className="flex flex-1 flex-col items-center justify-between font-semibold">
          <Header score={score} />
          {picked ? (
            <Picked
              paper={paperIcon}
              rock={rockIcon}
              scissors={scissorsIcon}
              picked={picked}
              image={image}
              bg={player}
            />
          ) : (
            <Buttons
              paper={paperIcon}
              rock={rockIcon}
              scissors={scissorsIcon}
              onClick={pick}
            />
          )}
          <Rules onClick={() => setRulesModal(true)} />
          {rulesModal && <RulesModal onClose={() => setRulesModal(false)} />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
