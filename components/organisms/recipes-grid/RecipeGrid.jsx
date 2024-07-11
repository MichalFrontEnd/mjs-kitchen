import styles from "./recipes-grid.module.css";
import { RecipeCard } from "@/components/molecules/recipe-card";

export function RecipeGrid() {
  return (
    <ul className={styles.recipes}>
      {meals.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard {...recipe} />
        </li>
      ))}
    </ul>
  );
}

export default RecipeGrid;
