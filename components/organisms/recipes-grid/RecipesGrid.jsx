import styles from "./recipes-grid.module.css";
import { getRecipes } from '@/lib/recipes';
import { RecipeCard } from "@/components/molecules/recipe-card";

export async function RecipesGrid() {
  const recipes = await getRecipes();

  return (
    <ul className={styles.recipes}>
      {recipes &&  
        recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard {...recipe} />
          </li>
      )
      )}
    </ul>
  );
}

export default RecipesGrid;
