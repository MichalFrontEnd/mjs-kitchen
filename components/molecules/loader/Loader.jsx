
import styles from "./loader.module.css";

export function Loader() {
    const letters = Array.from("Loading...");
    return (
        <h1 className={`${styles.loading} centered`}>
          {letters.map((char, index) => (
            <span
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={styles.letter}
            >
              {char}
            </span>
          ))}
        </h1>
    );
  }
  
  export default Loader;