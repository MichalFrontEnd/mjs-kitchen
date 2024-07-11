import styles from "./recipes-grid.module.css";
import { RecipeCard } from "@/components/molecules/recipe-card";

export function RecipesGrid(recipes) {
  return (
    <ul className={styles.recipes}>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard {...recipe} />
        </li>
      ))}
    </ul>
  );
}

export default RecipesGrid;
