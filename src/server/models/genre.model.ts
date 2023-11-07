import { createInsertSchema } from "drizzle-zod";
import { genres } from "../db/schema";

// Types
export type Genre = typeof genres.$inferSelect;
export type GenreDTO = typeof genres.$inferInsert;

// Validation schemas
export const insertCountrySchema = createInsertSchema(genres);

// Queries
