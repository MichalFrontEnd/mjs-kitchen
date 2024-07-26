// Recipes Page
import { Suspense } from "react";
import styles from "./page.module.css";
import { RecipesGrid } from "@/components/organisms/recipes-grid";
import { Loader } from "@/components/molecules/loader";

export function RecipesPage() {
  
  return (
    <>
      <header className={styles.header}>
        <h1>Recipes Page</h1>
        <p>Browse by meal type or tag</p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
         <RecipesGrid />
        </Suspense>
      </main>
    </>
  );
}

export default RecipesPage;
