import styles from "./page.module.css";
import { RecipesGrid } from "@/components/organisms/recipes-grid";

export function RecipesPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>Recipes Page</h1>;<p>Browse by meal type or tag</p>
      </header>
      <main className={styles.main}>
        <RecipesGrid recipes={[]} />
      </main>
    </>
  );
}

export default RecipesPage;
