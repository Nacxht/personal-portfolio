import { Model } from "./model";

export class Intro extends Model {
  async get() {
    const result = await this.db.query.intro.findFirst();

    return result;
  }
}
