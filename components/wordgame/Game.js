import React, { useState } from "react";

// Components
import Wordgame from "./Wordgame";
import AboutGame from "./AboutGame";

const Game = () => {
  const [startGame, setStartGame] = useState(false);
  return (
    <>{!startGame ? <AboutGame setStartGame={setStartGame} /> : <Wordgame />}</>
  );
};

export default Game;
