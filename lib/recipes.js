import sql from 'better-sqlite3';

const db = sql('recipes.db')

export async function getRecipes() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM recipes').all();
}