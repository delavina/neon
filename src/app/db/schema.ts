import { boolean, numeric, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey().notNull(),
  content: text("content").notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  author: text("author").notNull(),
  author_id: text("author_id").notNull(),
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  slug: varchar("slug", { length: 256 }).notNull(),
})

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export const sessionsTable = pgTable("sessions", {
  id: serial("id").primaryKey().notNull(),
  user_id: text("user_id").notNull(),
  expires: timestamp("expires").notNull(),
  session_token: text("session_token").notNull(),
  access_token: text("access_token").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export const products = pgTable("products", {
  slug: text("slug").notNull().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  price: numeric("price").notNull(),
  currency: text("currency").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})