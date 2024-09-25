import KeyboardRow from "./KeyboardRow";

import styles from "./Keyboard.module.css";

export default function Keyboard() {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
  ];

  return (
    <div className={styles.keyboard}>
      {keys.map((r, i) => {
        return <KeyboardRow key={i} letters={r}></KeyboardRow>;
      })}
    </div>
  );
}
