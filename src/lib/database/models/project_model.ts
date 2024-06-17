import { project } from "../schemas/project_schema";
import { Model } from "./model";

export class Project extends Model {
  async get() {
    const result = await this.db.select().from(project);

    return result;
  }
}
