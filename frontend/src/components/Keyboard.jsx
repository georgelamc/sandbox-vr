import KeyboardRow from "./KeyboardRow";

import styles from "./Keyboard.module.css";

export default function Keyboard() {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
  ];

  return (
    <div className={styles.keyboard}>
      {keys.map((r, i) => {
        return <KeyboardRow key={i} row={i} letters={r}></KeyboardRow>;
      })}
    </div>
  );
}
