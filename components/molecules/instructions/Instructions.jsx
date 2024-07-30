import styles from "./instructions.module.css";

export function Instructions({ instructions }) {
  instructions = instructions.replace(/\n/g, "<br />");
  return (
    // ToDo: change!
    <p
      className={styles.instructions}
      dangerouslySetInnerHTML={{ __html: instructions }}
    ></p>
  );
}

export default Instructions;
