import GameboardRow from "./GameboardRow";

import styles from "./Gameboard.module.css";

export default function Gameboard() {
  const NUM_ROWS = 6;

  const rows = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    rows.push(<GameboardRow key={i} rowNum={i}></GameboardRow>);
  }

  return <div className={styles.gameboard}>{rows}</div>;
}
