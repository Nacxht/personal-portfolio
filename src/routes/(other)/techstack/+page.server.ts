import { TechstackCategory } from "$lib/database/models/techstack_model";

const techstackCategoryModel = new TechstackCategory();

export async function load() {
  return {
    techstackCategory: techstackCategoryModel.get(),
  };
}
