import styles from "./page.module.css";
import Image from "next/image";
import { getRecipe } from "@/lib/recipes";
import { Instructions } from "@/components/molecules/instructions";
import { notFound } from "next/navigation";

export function RecipeDetailPage({ params }) {
  const recipe = getRecipe(params.recipeSlug);
  console.log("recipe: ", recipe);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h1>{recipe.title}</h1>
          <div className={styles.creator}>
            <p>by </p>
            <p>
              {recipe.creator_link ? (
                <a
                  href={recipe.creator_link}
                  className='highlight'
                >
                  {recipe.creator}
                </a>
              ) : (
                recipe.creator
              )}
            </p>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.subheader}>Ingredients</h2>
        <p>Ingredients component Placeholder</p>
        <h2 className={styles.subheader}>Instructions</h2>
        <Instructions instructions={recipe.instructions} />
      </main>
    </>
  );
}

export default RecipeDetailPage;
