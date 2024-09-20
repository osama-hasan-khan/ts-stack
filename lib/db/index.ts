import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "../env";
const sql = neon(env.AUTH_DRIZZLE_URL);
const db = drizzle(sql);
