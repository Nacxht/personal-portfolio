import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/database/schemas/*.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: "static/portfolio.sqlite",
  },
} satisfies Config;
