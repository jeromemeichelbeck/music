import type { TownDTO } from "@/server/models/town.model";

export const townsData = [
  {
    name: "Strasbourg",
    description: "Belle ville",
    areaId: 1,
    latitude: "48.5734053",
    longitude: "7.7521113",
  },
  {
    name: "Metz",
    description: "Encode plus belle !",
    areaId: 1,
    latitude: "49.1196964",
    longitude: "6.1763552",
  },
] satisfies TownDTO[];
