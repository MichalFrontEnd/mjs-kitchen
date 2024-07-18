import styles from "./loading.module.css";

export function LoadingPage() {
  const letters = Array.from("Loading...");
  return (
    <div className='container centered'>
      <h1 className={styles.loading}>
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
    </div>
  );
}

export default LoadingPage;
