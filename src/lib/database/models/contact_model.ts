import { Model } from "./model";

export class Contact extends Model {
  async get() {
    const result = await this.db.query.contactInformation.findFirst();

    return result;
  }
}
