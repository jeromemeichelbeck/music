import {
  getPaginatedForEntity,
  type PaginationOptions,
} from "@/lib/db/get-paginated-for-entity";
import { getTotalCountForEntity } from "@/lib/db/get-total-count-for-entity";
import { bands } from "@/server/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { db } from "../db";

// Types
export type Band = typeof bands.$inferSelect;
export type BandDTO = typeof bands.$inferInsert;

// Validation Schemas
export const insertBandSchema = createInsertSchema(bands);

// Queries
export async function getBandsTotalCount() {
  return getTotalCountForEntity(bands);
}

export async function getBands() {
  return db.select().from(bands);
}

export async function getPaginatedBands(
  { page, pageSize }: PaginationOptions,
  search?: string,
) {
  return getPaginatedForEntity(bands, { page, pageSize }, search);
}

export async function insertBand(band: BandDTO) {
  return db.insert(bands).values(band);
}
