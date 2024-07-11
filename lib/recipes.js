import sql from 'better-sqlite3';

const db = sql('recipes.db')

export function getRecipes() {
    return db.prepare('SELECT * FROM recipes').all();
}