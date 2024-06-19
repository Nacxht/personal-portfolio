import { drizzle } from "drizzle-orm/libsql";
import { DB_URL, DB_AUTH_TOKEN } from "$env/static/private";

import * as blog from "./schemas/blog_schema";
import * as contact from "./schemas/contact_schema";
import * as experience from "./schemas/experience_schema";
import * as intro from "./schemas/intro_schema";
import * as project from "./schemas/project_schema";
import * as techstack from "./schemas/techstack_schema";
import { createClient } from "@libsql/client";

const client = createClient({ url: DB_URL, authToken: DB_AUTH_TOKEN });

export const db = drizzle(client, {
  schema: {
    ...blog,
    ...contact,
    ...experience,
    ...intro,
    ...project,
    ...techstack,
  },
});
