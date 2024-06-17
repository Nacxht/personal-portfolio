import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { blog } from "./blog_schema";

export const project = sqliteTable("projects", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  techstack: text("techstack").notNull(),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});

// Relations
export const projectRelation = relations(project, ({ one }) => ({
  blog: one(blog, {
    fields: [project.id],
    references: [blog.id],
  }),
}));
