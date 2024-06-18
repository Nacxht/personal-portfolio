import { Techstack } from "$lib/database/models/techstack_model";

export async function getTechstack(name: string) {
  const techstackModel = new Techstack();
  const result = await techstackModel.get(name);

  return result;
}
