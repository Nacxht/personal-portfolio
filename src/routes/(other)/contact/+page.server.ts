import { Contact } from "$lib/database/models/contact_model";

const contactModel = new Contact();

export async function load() {
  const contacts = await contactModel.get();

  return {
    contacts,
  };
}
