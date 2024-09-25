import GameboardRow from "./GameboardRow";

import styles from "./Gameboard.module.css";

export default function Gameboard() {
  const numRows = 6;

  return (
    <div className={styles.gameboard}>
      {Array.from({ length: numRows }, (_, i) => (
        <GameboardRow key={i}></GameboardRow>
      ))}
    </div>
  );
}
