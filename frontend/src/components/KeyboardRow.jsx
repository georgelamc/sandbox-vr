import Key from "./Key";

import styles from "./KeyboardRow.module.css";

export default function KeyboardRow({ row, letters }) {
  return (
    <div className={`${styles.keyboardRow} ${row === 1 ? styles.secondRow : ""}`}>
      {letters.map((l, i) => {
        return <Key key={i} letter={l}></Key>;
      })}
    </div>
  );
}
