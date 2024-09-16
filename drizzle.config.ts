import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default {
  schema: "./src/lib/database/schemas/*.ts",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_URL || "",
    authToken: process.env.DB_AUTH_TOKEN || "",
  },
} satisfies Config;
