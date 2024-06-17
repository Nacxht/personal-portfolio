import { eq } from "drizzle-orm";
import { Model } from "./model";
import { project } from "../schemas/project_schema";

export class Blog extends Model {
  async getDetail(title: string) {
    const result = await this.db.query.blog.findFirst({
      columns: {
        projectId: false,
      },

      with: {
        project: { columns: { name: true, techstack: true } },
        screenshots: { columns: { id: true, title: true, imageLink: true } },
      },

      where: eq(project.name, title),
    });

    return result;
  }
}
