import { db } from "@/server/db";
import { like, type ColumnBaseConfig } from "drizzle-orm";
import type {
  MySqlColumn,
  MySqlTableWithColumns,
} from "drizzle-orm/mysql-core";

export const DEFAULT_PAGE_SIZE = 10;

export function getPageSize() {
  // TODO: Get page size by connected user or cookie
  return DEFAULT_PAGE_SIZE;
}

export type PaginationOptions = {
  page: number;
  pageSize: number;
};

export async function getPaginatedForEntity<
  TTableConfig extends {
    name: string;
    schema: undefined;
    dialect: string;
    columns: { name: MySqlColumn<ColumnBaseConfig<"string", string>> };
  },
>(
  entity: MySqlTableWithColumns<TTableConfig>,
  { page = 1, pageSize = getPageSize() }: PaginationOptions,
  search?: string,
) {
  const offset = (page - 1) * pageSize;

  let query = db.select().from(entity);

  if (search) {
    query = query.where(like(entity.name, `${search}%`));
  }

  return query.limit(pageSize).offset(offset);
}
