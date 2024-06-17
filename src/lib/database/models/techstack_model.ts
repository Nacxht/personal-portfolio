import { Model } from "./model";

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
            svgCode: true,
          },
        },
      },
    });

    return result;
  }
}
