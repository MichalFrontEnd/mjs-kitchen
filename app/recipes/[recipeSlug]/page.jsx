import styles from "./page.module.css";
import Image from "next/image";
import { getRecipe } from '@/lib/recipes';
import { Instructions } from '@/components/molecules/instructions'
import { notFound } from "next/navigation";

export function RecipeDetailPage({params}) {
  const recipe = getRecipe(params.recipeSlug);

  if (!recipe) {
    notFound()
  }
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={recipe.image} alt={recipe.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{recipe.title}</h1>
          <p className={styles.creator}>
            {/* conditional link */}
            by <a href={recipe.creator_link}>{recipe.creator}</a>
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.subheader}>Ingredients</h2>
        {/* Ingredients component */}
        <p>Ingredients component Placeholder</p>
        <h2 className={styles.subheader}>Instructions</h2>
        {/* Instructions component */}
        <Instructions instructions={recipe.instructions}/>
      </main>
    </>
  );
}

export default RecipeDetailPage;