import { createInsertSchema } from "drizzle-zod";
import { towns } from "../db/schema";
import { db } from "../db";
import { getTotalCountForEntity } from "@/lib/db/get-total-count-for-entity";

// Types
export type Town = typeof towns.$inferSelect;
export type TownDTO = typeof towns.$inferInsert;

// Validation schemas
export const insertTownSchema = createInsertSchema(towns);

// Queries
export async function getTownsTotalCount() {
  return getTotalCountForEntity(towns);
}

export async function getTowns() {
  return db.select().from(towns);
}
