import React from "react";

const AboutGame = ({ setStartGame }) => {
  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <div className="w-80 md:w-96 bg-neutral-900 text-red-400">
      <h1 className="py-2 text-2xl text-center dark-bg-color border-t-2 border-red-400 ">
        Word game
      </h1>
      <div className="p-4">
        <h1 className="font-medium text-xl xl:text-3xl text-center  ">
          This game is about trying to guess the correct word.
        </h1>
        <h1 className="my-4 xl:text-xl text-center  ">
          You have 10 attempts to guess the word or you will lose
        </h1>
      </div>

      <div className="flex justify-center">
        <button
          className="py-2 px-4 m-2 tracking-wide font-semibold border border-red-400   active:bg-red-400 active:bg-opacity-10"
          onClick={handleStartGame}
        >
          Start game
        </button>
      </div>
    </div>
  );
};

export default AboutGame;
