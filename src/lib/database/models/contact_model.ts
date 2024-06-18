import { contactInformation } from "../schemas/contact_schema";
import { Model } from "./model";

export class Contact extends Model {
  async get() {
    const result = await this.db.select().from(contactInformation);

    return result;
  }
}
