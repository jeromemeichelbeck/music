import { relations, sql } from "drizzle-orm";
import {
  bigint,
  index,
  int,
  mysqlTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `music_${name}`);

// Those fields are common to most entities
export const baseEntity = {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  summary: text("summary").notNull(),
  description: text("description").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
};

export const posts = mysqlTable(
  "post",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    createdById: varchar("createdById", { length: 255 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (example) => ({
    createdByIdIdx: index("createdById_idx").on(example.createdById),
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  image: varchar("image", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = mysqlTable(
  "account",
  {
    userId: varchar("userId", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
    userIdIdx: index("userId_idx").on(account.userId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = mysqlTable(
  "session",
  {
    sessionToken: varchar("sessionToken", { length: 255 })
      .notNull()
      .primaryKey(),
    userId: varchar("userId", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (session) => ({
    userIdIdx: index("userId_idx").on(session.userId),
  }),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  }),
);

export const countries = mysqlTable("country", {
  ...baseEntity,
  code: varchar("code", { length: 255 }).notNull(),
});

export const countriesRelations = relations(countries, ({ many }) => ({
  areas: many(areas),
}));

export const areas = mysqlTable("area", {
  ...baseEntity,
  countryId: bigint("countryId", { mode: "number" }).notNull(),
});

export const areasRelations = relations(areas, ({ one, many }) => ({
  country: one(countries, {
    fields: [areas.countryId],
    references: [countries.id],
  }),
  towns: many(towns),
}));

export const towns = mysqlTable("town", {
  ...baseEntity,
  areaId: bigint("areaId", { mode: "number" }).notNull(),
  latitude: varchar("latitude", { length: 255 }).notNull(),
  longitude: varchar("longitude", { length: 255 }).notNull(),
});

export const townRelations = relations(towns, ({ one, many }) => ({
  area: one(areas, { fields: [towns.areaId], references: [areas.id] }),
  bands: many(bands),
}));

export const genres = mysqlTable("genre", {
  ...baseEntity,
});

export const genresRelations = relations(genres, ({ many }) => ({
  bandGenres: many(bandGenres),
}));

export const bandGenres = mysqlTable(
  "bandGenre",
  {
    bandId: bigint("bandId", { mode: "number" }).notNull(),
    genreId: bigint("genreId", { mode: "number" }).notNull(),
  },
  (bg) => ({
    compoundKey: primaryKey(bg.bandId, bg.genreId),
  }),
);

export const bandGenresRelations = relations(bandGenres, ({ one }) => ({
  band: one(bands, { fields: [bandGenres.bandId], references: [bands.id] }),
  genre: one(genres, {
    fields: [bandGenres.genreId],
    references: [genres.id],
  }),
}));

export const bands = mysqlTable("band", {
  ...baseEntity,
  yearActiveFrom: varchar("yearActiveFrom", { length: 255 }).notNull(),
  yearActiveTo: varchar("yearActiveTo", { length: 255 }),
  townId: bigint("townId", { mode: "number" }).notNull(),
});

export const bandsRelations = relations(bands, ({ one, many }) => ({
  town: one(towns, { fields: [bands.townId], references: [towns.id] }),
  bandGenres: many(bandGenres),
}));
