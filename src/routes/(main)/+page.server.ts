import { Intro } from "$lib/database/models/intro_model";
import { Project } from "$lib/database/models/project_model";
import { Techstack } from "$lib/database/models/techstack_model";
import { ageCalculator } from "$lib/utils/age_calculator";

const introModel = new Intro();
const projectModel = new Project();
const techstackModel = new Techstack();

export async function load() {
  const intro = await introModel.get();
  const recentProjects = await projectModel.getRecent();
  const techstack = await techstackModel.getAll();

  const badgeContents = [
    `${ageCalculator("2005-05-23")} y/o`,
    "Backend Developer",
    "Indonesian",
    "Sidoarjo, East Java",
  ];

  return {
    intro: intro!,
    badgeContents,
    recentProjects,
    techstack,
  };
}
