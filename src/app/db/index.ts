import { neon } from "@neondatabase/serverless"
import { postsTable, productsTable, sessionsTable, usersTable } from "./schema";
import { drizzle } from "drizzle-orm/neon-http";


if (!process.env.NEON_DATABASE_URL) {
  throw new Error("Missing NEON_DATABASE_URL environment variable");
}
const sql = neon(process.env.NEON_DATABASE_URL!);

export const db = drizzle(sql, {
  schema: {
    posts: postsTable,
    users: usersTable,
    sessions: sessionsTable,
    products: productsTable,
  }
});