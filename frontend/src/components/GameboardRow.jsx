import Cell from "./Cell";

import styles from "./GameboardRow.module.css";

export default function GameboardRow() {
  const numCells = 5;

  return (
    <div className={styles.row}>
      {Array.from({ length: numCells }, (_, i) => (
        <Cell key={i}></Cell>
      ))}
    </div>
  );
}
