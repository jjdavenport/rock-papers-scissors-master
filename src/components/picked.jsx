import { useEffect, useState } from "react";
import Result from "./result";
import Empty from "./empty";
import Choice from "./choice";
import { motion, AnimatePresence } from "framer-motion";

const Picked = ({
  playerImage,
  playerChoice,
  computerChoice,
  computerImage,
  reset,
  result,
  desktop,
}) => {
  const [active, setActive] = useState({
    computerChoice: false,
    result: false,
  });

  useEffect(() => {
    const computerTimer = setTimeout(() => {
      setActive((prev) => ({ ...prev, computerChoice: true }));
    }, 1000);

    const resultTimer = setTimeout(() => {
      setActive((prev) => ({ ...prev, result: true }));
    }, 2000);

    return () => {
      clearTimeout(computerTimer);
      clearTimeout(resultTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (desktop) {
    return (
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="~md/lg:gap-10/20 flex w-full flex-col items-center"
      >
        <div className="flex items-center ~sm/lg:~gap-2/16">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center ~sm/lg:~gap-4/10"
          >
            <span className="uppercase tracking-widest text-white ~sm/lg:~text-base/3xl">
              You Picked
            </span>
            <Choice
              winner={result === "Win"}
              choice={playerChoice}
              image={playerImage}
            />
          </motion.div>
          <AnimatePresence>
            {active.result && (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Result result={result} onClick={reset} />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center ~sm/lg:~gap-4/10"
          >
            <span className="uppercase tracking-widest text-white ~sm/lg:~text-base/3xl">
              The House Picked
            </span>
            <AnimatePresence mode="wait">
              {active.computerChoice ? (
                <motion.div
                  key="choice"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Choice
                    winner={result === "Lose"}
                    choice={computerChoice}
                    image={computerImage}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Empty />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.main>
    );
  }

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-1 flex-col items-center justify-center gap-10"
    >
      <div className="flex w-full items-center ~sm/lg:~gap-4/10">
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center gap-4"
        >
          <Choice
            winner={result === "Win"}
            choice={playerChoice}
            image={playerImage}
          />
          <span className="uppercase tracking-widest text-white">
            You Picked
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center gap-4"
        >
          <AnimatePresence mode="wait">
            {active.computerChoice ? (
              <motion.div
                key="choice"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Choice
                  winner={result === "Lose"}
                  choice={computerChoice}
                  image={computerImage}
                />
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Empty />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="uppercase tracking-widest text-white">
            The House Picked
          </span>
        </motion.div>
      </div>
      <AnimatePresence>
        {active.result && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Result result={result} onClick={reset} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Picked;
