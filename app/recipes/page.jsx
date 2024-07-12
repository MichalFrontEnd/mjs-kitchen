import styles from "./page.module.css";
import { getRecipes } from '@/lib/recipes'
import { RecipesGrid } from "@/components/organisms/recipes-grid";

export async function RecipesPage() {
  const recipes = await getRecipes();
  return (
    <>
      <header className={styles.header}>
        <h1>Recipes Page</h1>
        <p>Browse by meal type or tag</p>
      </header>
      <main className={styles.main}>
        <RecipesGrid recipes={recipes} />
      </main>
    </>
  );
}

export default RecipesPage;
