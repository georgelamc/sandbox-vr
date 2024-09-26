import { useContext } from "react";
import styles from "./Cell.module.css";
import { GuessContext } from "../contexts/GuessContext";

export default function Cell({ rowNum, cellNum }) {
  const { guesses } = useContext(GuessContext);

  const guess = rowNum < guesses.length ? guesses[rowNum] : [];

  return <div className={styles.cell}>{guess.length > 0 && guess[cellNum] ? guess[cellNum][0].toUpperCase() : ""}</div>;
}
