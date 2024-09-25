import { useState } from "react";

import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";
import { LETTER_UNSUBMITTED } from "../constants";

export default function App() {
  /*
   * guesses = [ // an array of guesses, which is an array of pairs (letter, status)
   *    [["w", s], ["o", s], ["r", s], ["d", s], ["1", s]] // first guess
   *    [["w", s], ["o", s], ["r", s], ["d", s], ["2", s]] // second guess
   *    ...
   * ]
   */
  const [guesses, setGuesses] = useState([]);
  console.log(guesses);

  function addLetter(letter) {
    setGuesses((prev) => {
      if (prev.length === 0) {
        // there are no previous guesses, so we return a new array with a new word
        return [[[letter, LETTER_UNSUBMITTED]]];
      }

      const prevGuess = prev[prev.length - 1];
      const lastLetter = prevGuess[prevGuess.length - 1];
      if (prevGuess.length === 5 && lastLetter[1] === LETTER_UNSUBMITTED) {
        // our previous word was not submitted, but is already full
        return prev;
      }
      if (prevGuess.length === 5) {
        // our previous word was submitted, so we start a new word
        return [...prev, [[letter, LETTER_UNSUBMITTED]]];
      }

      // since the previous word has less than 5 letters, we know it was never submitted
      return [...prev.slice(0, -1), [...prevGuess, [letter, LETTER_UNSUBMITTED]]];
    });
  }

  function deleteLetter() {
    setGuesses((prev) => {
      if (prev.length === 0) {
        // nothing to delete
        return prev;
      }

      let prevGuess = prev[prev.length - 1];
      const lastLetter = prevGuess[prevGuess.length - 1];
      if (lastLetter[1] != LETTER_UNSUBMITTED) {
        // we cannot delete a letter from a word that was already submitted
        return prev;
      }

      prevGuess = prevGuess.slice(0, -1);
      if (prevGuess.length === 0) {
        // if we deleted all the letters, we should remove the word
        return [...prev.slice(0, -1)];
      }

      return [...prev.slice(0, -1), prevGuess];
    });
  }

  function saveGuess() {
    
  }

  return (
    <div>
      <Gameboard guess={guesses}></Gameboard>
      <Keyboard handleAdd={addLetter} handleDelete={deleteLetter} handleSave={saveGuess}></Keyboard>
    </div>
  );
}
