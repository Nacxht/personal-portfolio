import { Project } from "$lib/database/models/project_model";
import { Techstack } from "$lib/database/models/techstack_model";

const projectModel = new Project();
const techstackModel = new Techstack();

export async function load() {
  const projects = await projectModel.get();
  const techstack = await techstackModel.getAll();

  return {
    projects,
    techstack,
  };
}
