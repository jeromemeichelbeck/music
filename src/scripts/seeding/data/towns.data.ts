import type { TownDTO } from "@/server/models/town.model";

export const townsData = [
  {
    name: "Strasbourg",
    description: "Belle ville",
    areaId: 1,
  },
  {
    name: "Metz",
    description: "Encode plus belle !",
    areaId: 1,
  },
] satisfies TownDTO[];
