// bun run src/scripts/seeding/index.ts

import { db } from "@/server/db";
import { bands } from "@/server/db/schema";
import { bandsData } from "./data/bands";

async function seed() {
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
