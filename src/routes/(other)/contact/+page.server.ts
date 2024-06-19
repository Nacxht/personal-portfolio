import { Contact } from "$lib/database/models/contact_model";

const contactModel = new Contact();

export async function load() {
  return {
    contacts: contactModel.get(),
  };
}
