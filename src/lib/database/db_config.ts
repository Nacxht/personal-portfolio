import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import * as blog from "./schemas/blog_schema";
import * as contact from "./schemas/contact_schema";
import * as experience from "./schemas/experience_schema";
import * as intro from "./schemas/intro_schema";
import * as project from "./schemas/project_schema";
import * as techstack from "./schemas/techstack_schema";

const sqlite = new Database("static/portfolio.sqlite");

export const db = drizzle(sqlite, {
  schema: {
    ...blog,
    ...contact,
    ...experience,
    ...intro,
    ...project,
    ...techstack,
  },
});
