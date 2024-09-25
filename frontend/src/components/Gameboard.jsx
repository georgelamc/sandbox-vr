import Row from "./Row";

import styles from "./Gameboard.module.css";

export default function Gameboard() {
  const numRows = 6;

  return (
    <div class={styles.gameboard}>
      {Array.from({ length: numRows }, (_, i) => (
        <Row key={i}></Row>
      ))}
    </div>
  );
}
