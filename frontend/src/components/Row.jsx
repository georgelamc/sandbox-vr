import Cell from "./Cell";

import styles from "./Row.module.css";

export default function Row() {
  const numCells = 5;

  return (
    <div class={styles.row}>
      {Array.from({ length: numCells }, (_, i) => (
        <Cell index={i}></Cell>
      ))}
    </div>
  );
}
