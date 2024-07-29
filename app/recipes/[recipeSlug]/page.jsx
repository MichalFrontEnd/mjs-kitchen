import styles from "./page.module.css";
import Image from "next/image";
import { getRecipe } from '@/lib/recipes';

export function RecipeDetailPage({params}) {
  const recipe = getRecipe(params.recipeSlug);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill />
        </div>
        <div className={styles.headerText}>
          <h1>{recipe.title}</h1>
          <p className={styles.creator}>
            {/* conditional link */}
            by <a href='#'>name</a>
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.subheader}>Ingredients</h2>
        {/* Ingredients component */}
        <p>Ingredients component Placeholder</p>
        <h2 className={styles.subheader}>Instructions</h2>
        {/* Instructions component */}
        <p>Instructions component Placeholder</p>
      </main>
    </>
  );
}

export default RecipeDetailPage;