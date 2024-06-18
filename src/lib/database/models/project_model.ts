import { desc } from "drizzle-orm";
import { project } from "../schemas/project_schema";
import { Model } from "./model";

export class Project extends Model {
  async get() {
    const result = await this.db
      .select()
      .from(project)
      .orderBy(desc(project.createdAt));

    return result;
  }

  async getRecent() {
    const result = await this.db
      .select()
      .from(project)
      .orderBy(desc(project.createdAt))
      .limit(2);

    return result;
  }
}
