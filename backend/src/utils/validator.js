import { LETTER_CORRECT, LETTER_INCORRECT, LETTER_UNSUBMITTED, LETTER_WRONG_SPOT } from "../constants.js";

export function validateInput(target, targetSet, guesses) {
  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i];
    const lastLetter = guess[guess.length - 1];
    if (lastLetter[1] != LETTER_UNSUBMITTED) {
      // we already checked this word
      continue;
    }

    for (let j = 0; j < guess.length; j++) {
      const letter = guess[j][0];
      if (letter === target[j]) {
        guess[j][1] = LETTER_CORRECT;
      } else if (targetSet.has(letter)) {
        guess[j][1] = LETTER_WRONG_SPOT;
      } else {
        guess[j][1] = LETTER_INCORRECT;
      }
    }
  }

  return guesses;
}
