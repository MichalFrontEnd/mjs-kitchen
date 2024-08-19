"use server";

import { saveRecipe } from './recipes'

export async function uploadRecipe(formData) {
  const recipe = {
    title: formData.get("title"),
    creator: formData.get("creator"),
    creator_link: formData.get("creator_link"),
    source: formData.get("source") || "",
    ingredients: formData.get("ingredients"),
    instructions: formData.get("instructions"),
    image: formData.get("image") || "",
  };
  console.log('recipe: ', recipe);

  await saveRecipe(recipe);
}
