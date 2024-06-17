import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contactInformation = sqliteTable("contact_informations", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  text: text("text"),
  link: text("link"),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});
