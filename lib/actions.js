"use server";
export async function uploadRecipe(formData) {
  const recipe = {
    title: formData.get("title"),
    creator: formData.get("creator"),
    source: formData.get("source") || "",
    ingredients: formData.get("ingredients"),
    instructions: formData.get("instructions"),
    image: formData.get("image") || "",
  };
  console.log('recipe: ', recipe);
}
