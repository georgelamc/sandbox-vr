import { useEffect, useState } from "react";

import KeyboardRow from "./KeyboardRow";

import styles from "./Keyboard.module.css";

export default function Keyboard({ handleAdd, handleDelete, handleSave }) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Delete" || event.key === "Backspace") {
        handleDelete();
      } else if (event.key === "Enter") {
        handleSave();
      } else if (event.key.length === 1 && event.key.charCodeAt(0) >= 97 && event.key.charCodeAt(0) <= 122) {
        handleAdd(event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.keyboard}>
      {keys.map((r, i) => {
        return <KeyboardRow key={i} row={i} letters={r}></KeyboardRow>;
      })}
    </div>
  );
}
