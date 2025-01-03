import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.NEON_DATABASE_URL) {
  throw new Error('Missing NEON_DATABASE_URL environment variable');
}

export default {
  schema: './src/app/db/schema.ts',
  out: './src/app/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL,
  },
  verbose: true,
  strict: true,
} satisfies Config;
