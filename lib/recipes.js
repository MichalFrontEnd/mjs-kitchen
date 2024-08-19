import fs from 'node:fs';
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

export async function handleRecipe(recipe) {
    recipe.slug = generateSlug(recipe.title);
    recipe.instructions = sanitizeInput(recipe.instructions);
    recipe.ingredients = sanitizeInput(recipe.ingredients);
    recipe.image = await handleImage(recipe);

    return recipe;
}


function generateSlug(recipeTitle) {
    return slugify(recipeTitle, {lower:true})
}

function sanitizeInput(textInput) {
    return xss(textInput);
}

async function handleImage(recipe) {
    const extension = recipe.image.name.split('.').pop();
    // TODO: add a random element to fileName to avoid overrides
    const fileName = `${recipe.slug}.${extension}`;
    
    const stream = fs.createWriteStream(`public/images/uploads/${fileName}`);
    const bufferedImage = await recipe.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (err) => {
        if (err) {
            throw new Error('Saving image failed');
        }
    });
    
    return `/images/uploads/${fileName}`;
}

export async function saveRecipe(recipe){
    db.prepare(`
 INSERT INTO recipes (
       slug,
       title,
       image,
       ingredients,
       instructions,
       creator,
       creator_link
     ) VALUES (
       @slug,
       @title,
       @image,
       @ingredients,
       @instructions,
       @creator,
       @creator_link
     )
   `).run(recipe);
};