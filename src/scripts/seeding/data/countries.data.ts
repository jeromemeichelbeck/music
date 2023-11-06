import type { CountryDTO } from "@/server/models/countrie.model";

export const countriesData = [
  {
    id: 1,
    name: "France",
    description: "La plus prétentieuse",
    code: "FR",
  },
  {
    id: 2,
    name: "Germany",
    description: "La plus prétentieuse",
    code: "DE",
  },
] satisfies CountryDTO[];
