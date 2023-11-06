import { db } from "@/server/db";
import { sql } from "drizzle-orm";
import type {
  MySqlTableWithColumns,
  TableConfig,
} from "drizzle-orm/mysql-core";

export async function getTotalCountForEntity<T extends TableConfig>(
  entity: MySqlTableWithColumns<T>,
) {
  const result = await db
    .select({
      count: sql<number>`count(*)`,
    })
    .from(entity);

  return result[0]?.count ?? 0;
}
