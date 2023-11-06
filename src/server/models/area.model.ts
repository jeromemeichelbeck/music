import { createInsertSchema } from "drizzle-zod";
import { areas } from "../db/schema";
import { db } from "../db";
import { getTotalCountForEntity } from "@/lib/db/get-total-count-for-entity";

// Types
export type Area = typeof areas.$inferSelect;
export type AreaDTO = typeof areas.$inferInsert;

// Validation schemas
export const insertAreaSchema = createInsertSchema(areas);

// Queries
export async function getAreasTotalCount() {
  return getTotalCountForEntity(areas);
}

export async function getAreas() {
  return db.select().from(areas);
}
