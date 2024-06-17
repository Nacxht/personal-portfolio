import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const experience = sqliteTable("experiences", {
  id: integer("id").primaryKey(),
  dateRange: text("date_range").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});
