// Recipe Detail Page [slug]
import styles from "./page.module.css";
import Image from "next/image";

export function RecipeDetailPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill />
        </div>
        <div className={styles.headerText}>
          <h1>Title</h1>
          <p className={styles.creator}>
            {/* conditional link */}
            by <a href='#'>name</a>
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.subheader}>Ingredients</h2>
        {/* Ingredients component */}
        <h2 className={styles.subheader}>Instructions</h2>

        {/* Instructions component */}
      </main>
    </>
  );
}

export default RecipeDetailPage;
