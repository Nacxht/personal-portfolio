import { desc } from "drizzle-orm";
import { project } from "../schemas/project_schema";
import { Model } from "./model";

export class Project extends Model {
  async get(limit: number, offset: number = 0) {
    const result = await this.db
      .select()
      .from(project)
      .orderBy(desc(project.createdAt))
      // .limit(limit).offset(offset);

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
