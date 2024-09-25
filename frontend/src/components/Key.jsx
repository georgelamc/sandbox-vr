import styles from "./Key.module.css";

export default function Key({ letter }) {
  return <div className={`${styles.key} ${letter === "ENTER" || letter === "DELETE" ? styles.special : ""}`}>{letter}</div>;
}
