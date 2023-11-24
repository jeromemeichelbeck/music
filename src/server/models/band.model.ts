import {
  getPaginatedForEntity,
  type PaginationOptions,
} from "@/lib/db/get-paginated-for-entity";
import { getTotalCountForEntity } from "@/lib/db/get-total-count-for-entity";
import { bands } from "@/server/db/schema";
import { eq } from "drizzle-orm";
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

export async function getBands({ page, pageSize }: PaginationOptions) {
  try {
    return db.query.bands.findMany({
      limit: pageSize,
      offset: (page - 1) * pageSize,
      with: {
        town: {
          with: {
            area: {
              with: {
                country: true,
              },
            },
          },
        },
        bandGenres: {
          with: {
            genre: true,
          },
        },
      },
    });
  } catch (error) {
    return [];
  }
}

export async function getBandById(bandId: number) {
  try {
    return (
      (await db.query.bands.findFirst({
        where: eq(bands.id, bandId),
        with: {
          town: {
            with: {
              area: {
                with: {
                  country: true,
                },
              },
            },
          },
          bandGenres: {
            with: {
              genre: true,
            },
          },
        },
      })) ?? null
    );
  } catch (error) {
    return null;
  }
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
