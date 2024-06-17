import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const techstackCategory = sqliteTable("techstack_categories", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const techstack = sqliteTable("techstack", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  svgCode: text("svg_code"),
  categoryId: integer("category_id").references(() => techstackCategory.id),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});

// Relations
export const techstackRelation = relations(techstack, ({ one }) => ({
  category: one(techstackCategory, {
    fields: [techstack.categoryId],
    references: [techstackCategory.id],
  }),
}));

export const techstackCategoryRelation = relations(
  techstackCategory,
  ({ many }) => ({
    techstack: many(techstack),
  }),
);
