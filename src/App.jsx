import Header from "./components/header";
import Buttons from "./components/buttons";
import Rules from "./components/rules";
import { useState, useEffect } from "react";
import RulesModal from "./components/rules-modal";
import Footer from "./components/footer";
import Picked from "./components/picked";
import paperIcon from "./components/assets/icon-paper.svg";
import scissorsIcon from "./components/assets/icon-scissors.svg";
import rockIcon from "./components/assets/icon-rock.svg";
import { useMediaQuery } from "react-responsive";

function App() {
  const [score, setScore] = useState(0);
  const [rulesModal, setRulesModal] = useState(false);
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [picked, setPicked] = useState(false);
  const [playerImage, setPlayerImage] = useState(null);
  const [computerImage, setComputerImage] = useState(null);
  const choices = ["rock", "paper", "scissors"];
  const [result, setResult] = useState(null);
  const media = useMediaQuery({ minWidth: 768 });

  const reset = () => {
    setComputer(null);
    setPlayer(null);
    setComputer(null);
    setPicked(false);
    setComputerImage(null);
    setPlayerImage(null);
    setResult(false);
  };

  const play = () => {
    const random = choices[Math.floor(Math.random() * choices.length)];
    setComputer(random);
    if (random === "paper") {
      setComputerImage(paperIcon);
    } else if (random === "rock") {
      setComputerImage(rockIcon);
    } else if (random === "scissors") {
      setComputerImage(scissorsIcon);
    }
  };

  const game = () => {
    if (player === computer) {
      setResult("Draw");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setResult("Win");
      setScore((prev) => prev + 1);
    } else {
      setResult("Lose");
    }
  };

  useEffect(() => {
    if (player && computer) {
      setTimeout(() => {
        game();
      }, 2000);
    }
  }, [computer, player]);

  const pick = (picked) => {
    setPicked(true);
    setPlayer(picked);
    if (picked === "paper") {
      setPlayerImage(paperIcon);
    } else if (picked === "rock") {
      setPlayerImage(rockIcon);
    } else if (picked === "scissors") {
      setPlayerImage(scissorsIcon);
    }
    play();
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col gap-4 bg-gradient-to-b from-radialGradientStart to-radialGradientEnd font-custom text-base">
        <div className="flex flex-1 flex-col items-center justify-between font-semibold ~sm/md:~p-0/5">
          <Header score={score} />
          {picked ? (
            <Picked
              desktop={media}
              result={result}
              reset={reset}
              playerChoice={player}
              computerChoice={computer}
              paper={paperIcon}
              rock={rockIcon}
              scissors={scissorsIcon}
              playerImage={playerImage}
              computerImage={computerImage}
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
          {rulesModal && (
            <RulesModal desktop={media} onClose={() => setRulesModal(false)} />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
