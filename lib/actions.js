"use server";

import { redirect } from 'next/navigation';
import { saveRecipe, handleRecipe } from './recipes'

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

  const handledRecipe = await handleRecipe(recipe);
  await saveRecipe(handledRecipe);
  console.log('handledRecipe: ', handledRecipe);

  redirect(`/recipes/${handledRecipe.slug}`)
}
