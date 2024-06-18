import { eq } from "drizzle-orm";
import { Model } from "./model";
import { techstack } from "../schemas/techstack_schema";

export class TechstackCategory extends Model {
  async get() {
    const result = await this.db.query.techstackCategory.findMany({
      columns: {
        id: true,
        name: true,
      },

      with: {
        techstack: {
          columns: {
            id: true,
            name: true,
            imgLink: true,
          },
        },
      },
    });

    return result;
  }
}

export class Techstack extends Model {
  async getAll() {
    const result = await this.db.select().from(techstack);

    return result;
  }

  async get(name: string) {
    const result = await this.db.query.techstack.findFirst({
      where: eq(techstack.name, name),
    });

    return result;
  }
}
