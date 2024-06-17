import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const intro = sqliteTable("intro", {
  id: integer("id").primaryKey(),
  description: text("description").notNull(),
  serviceDescription: text("service_description").notNull(),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});
