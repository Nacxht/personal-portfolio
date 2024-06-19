import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { project } from "./project_schema";

export const blog = sqliteTable("blogs", {
  id: integer("id").primaryKey(),
  thumbnail: text("thumbnail").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  projectId: integer("project_id").references(() => project.id),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const blogScreenshot = sqliteTable("blog_screenshots", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  imageLink: text("image_link").notNull(),
  blogId: integer("blog_id").references(() => blog.id),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`(current_timestamp)`),
});

// Relations
export const blogRelation = relations(blog, ({ one, many }) => ({
  project: one(project, {
    fields: [blog.projectId],
    references: [project.id],
  }),

  screenshots: many(blogScreenshot),
}));

export const blogScreenshotRelation = relations(blogScreenshot, ({ one }) => ({
  blog: one(blog, {
    fields: [blogScreenshot.blogId],
    references: [blog.id],
  }),
}));
