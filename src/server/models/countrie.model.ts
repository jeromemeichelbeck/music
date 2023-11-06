import { createInsertSchema } from "drizzle-zod";
import { countries } from "../db/schema";
import { db } from "../db";
import { getTotalCountForEntity } from "@/lib/db/get-total-count-for-entity";

// Types
export type Country = typeof countries.$inferSelect;
export type CountryDTO = typeof countries.$inferInsert;

// Validation schemas
export const insertCountrySchema = createInsertSchema(countries);

// Queries
export async function getCountriesTotalCount() {
  return getTotalCountForEntity(countries);
}

export async function getCountries() {
  return db.select().from(countries);
}
