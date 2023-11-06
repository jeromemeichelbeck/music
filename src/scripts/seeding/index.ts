// bun run src/scripts/seeding/index.ts

import { db } from "@/server/db";
import { areas, bands, countries, towns } from "@/server/db/schema";
import { areasData } from "./data/areas.data";
import { bandsData } from "./data/bands.data";
import { countriesData } from "./data/countries.data";
import { townsData } from "./data/towns.data";
import { sql } from "drizzle-orm";

async function seed() {
  await Promise.all([
    db.delete(countries),
    db.delete(areas),
    db.delete(towns),
    db.delete(bands),
  ]);

  await Promise.all([
    db.execute(sql`ALTER TABLE music_country AUTO_INCREMENT = 1;`),
    db.execute(sql`ALTER TABLE music_area AUTO_INCREMENT = 1;`),
    db.execute(sql`ALTER TABLE music_town AUTO_INCREMENT = 1;`),
    db.execute(sql`ALTER TABLE music_band AUTO_INCREMENT = 1;`),
  ]);

  await db.insert(countries).values(countriesData);
  await db.insert(areas).values(areasData);
  await db.insert(towns).values(townsData);
  await db.insert(bands).values(bandsData);
}

seed()
  .then(() => {
    console.log("Seed complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
