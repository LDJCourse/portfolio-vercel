import React, { Component } from "react";

import { randomWord } from "./words";

class WordGame extends Component {
  static defaultProps = {
    maxWrongAttempt: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
      maxWrong: 10,
      newMaxWrong: 0,
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        className="gameBtn border-t border-l border-red-400 hover:bg-red-400 hover:bg-opacity-10"
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  render() {
    const gameOver = this.state.nWrong >= this.state.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateButtons();
    if (isWinner) gameState = "You win! The word was: " + this.state.answer;
    if (gameOver) gameState = "You lose. The word was: " + this.state.answer;

    let numColor = "text-gray-200";
    if (this.state.nWrong > 3) numColor = "text-yellow-400";
    if (this.state.nWrong > 7) numColor = "text-red-600";

    return (
      <div className="p-4 w-80 md:w-96 bg-neutral-900 text-red-400">
        <h1 className="py-4 text-3xl md:text-4xl font-mono text-center  ">
          Can you guess the word?
        </h1>
        <div className="Hangman">
          <div>
            <p className="Hangman-word text-center ">
              {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
          </div>

          <p className="text-center">{gameState}</p>
          <div className="mt-4 flex justify-between items-center">
            {!gameOver ? (
              <div className="text-lg text-gray-200 flex items-center">
                <span className={`${numColor} material-symbols-rounded`}>
                  notifications
                </span>
                <span className={` ml-2`}>{this.state.nWrong}</span>/
                <span>{this.state.maxWrong}</span>
              </div>
            ) : (
              <div />
            )}

            <button
              className=" tracking-wider font-semibold border border-red-400 active:bg-red-400 active:bg-opacity-10 "
              id="reset"
              onClick={this.reset}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WordGame;
