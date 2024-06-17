import { experience } from "../schemas/experience_schema";
import { Model } from "./model";

export class Experience extends Model {
  async get() {
    const result = await this.db.select().from(experience);

    return result;
  }
}
