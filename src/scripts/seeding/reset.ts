// bun run src/scripts/seeding/reset.ts

import { db } from "@/server/db";
import { areas, bandGenres, bands, countries, genres, towns } from "@/server/db/schema";
import { sql } from "drizzle-orm";

export async function reset() {
  await Promise.all([
    db.delete(countries),
    db.delete(areas),
    db.delete(towns),
    db.delete(bands),
    db.delete(genres),
    db.delete(bandGenres),
  ]);

  await Promise.all([
    db.execute(sql`ALTER TABLE music_country AUTO_INCREMENT = 1;`),
    db.execute(sql`ALTER TABLE music_area AUTO_INCREMENT = 1;`),
    db.execute(sql`ALTER TABLE music_town AUTO_INCREMENT = 1;`),
    db.execute(sql`ALTER TABLE music_band AUTO_INCREMENT = 1;`),
    db.execute(sql`ALTER TABLE music_genre AUTO_INCREMENT = 1;`),
  ]);
}

reset()
  .then(() => {
    console.log("Reset complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
