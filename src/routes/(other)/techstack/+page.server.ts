import { TechstackCategory } from "$lib/database/models/techstack_model";

const techstackCategoryModel = new TechstackCategory();

export async function load() {
  const techstackCategory = await techstackCategoryModel.get();

  return {
    techstackCategory,
  };
}
