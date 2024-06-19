import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import path from "path";

import * as blog from "./schemas/blog_schema";
import * as contact from "./schemas/contact_schema";
import * as experience from "./schemas/experience_schema";
import * as intro from "./schemas/intro_schema";
import * as project from "./schemas/project_schema";
import * as techstack from "./schemas/techstack_schema";

const dbPath = path.join(process.cwd(), "portfolio.sqlite");
const sqlite = new Database(dbPath);
// const sqlite = new Database("src/lib/database/portfolio.sqlite");

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
