import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('recipes.db')

export async function getRecipes() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM recipes').all();
}

export function getRecipe(slug) {
    return db.prepare('SELECT * FROM recipes WHERE slug = ?').get(slug);
}

export function saveRecipe(recipe){
    recipe.slug = generateSlug(recipe.title)
    recipe.instructions = sanitizeInput(recipe.instructions)
    recipe.ingredients = sanitizeInput(recipe.ingredients)
};

function generateSlug(recipeTitle) {
    return slugify(recipeTitle, {lower:true})
}

function sanitizeInput(textInput) {
    return xss(textInput);
}
