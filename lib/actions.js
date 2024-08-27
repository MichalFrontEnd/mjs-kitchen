"use server";

import { redirect } from 'next/navigation';
import { saveRecipe, handleRecipe } from './recipes'

function isInvalidText(text) {
  return !text || text.trim() === '';
}

function isValidUrl(urlString) {
  try {
    new URL(urlString.startsWith('http') ? urlString : `http://${urlString}`);
    return true;
  } catch (e) {
    return false;
  }
}

export async function uploadRecipe(prevState, formData) {
  const recipe = {
    title: formData.get("title"),
    creator: formData.get("creator"),
    creator_link: formData.get("creator_link"),
    source: formData.get("source") || "",
    ingredients: formData.get("ingredients"),
    instructions: formData.get("instructions"),
    image: formData.get("image") || "",
  };

  if (
    isInvalidText(recipe.title) ||
    isInvalidText(recipe.instructions) ||
    isInvalidText(recipe.creator) ||
    isInvalidText(recipe.instructions) ||
    (recipe.creator_link && !isValidURL(recipe.creator_link)) ||
    recipe.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  const handledRecipe = await handleRecipe(recipe);
  await saveRecipe(handledRecipe);

  redirect(`/recipes/${handledRecipe.slug}`)
}
