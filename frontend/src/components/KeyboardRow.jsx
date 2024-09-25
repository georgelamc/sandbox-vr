import Key from "./Key";

import styles from "./KeyboardRow.module.css";

export default function KeyboardRow({ letters }) {
  return (
    <div className={styles.keyboardRow}>
      {letters.map((l, i) => {
        return <Key key={i} letter={l}></Key>;
      })}
    </div>
  );
}
