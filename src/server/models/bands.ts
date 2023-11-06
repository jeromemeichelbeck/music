import { bands } from "@/server/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { db } from "../db";
import { sql } from "drizzle-orm";

// Types
export type Band = typeof bands.$inferSelect;
export type BandDTO = typeof bands.$inferInsert;

// Validation Schemas
export const insertBandSchema = createInsertSchema(bands);

// Queries
export async function getBandsTotalCount() {
  const result = await db
    .select({
      count: sql<number>`count(*)`,
    })
    .from(bands);

  return result[0]?.count ?? 0;
}

export async function getBands() {
  return db.select().from(bands);
}

export async function insertBand(band: BandDTO) {
  return db.insert(bands).values(band);
}
