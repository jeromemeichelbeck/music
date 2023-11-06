import {
  getBandsTotalCount,
  getPaginatedBands,
} from "@/server/models/band.model";

export default async function BandsPage() {
  const bands = await getPaginatedBands({ page: 1, pageSize: 20 });
  const count = await getBandsTotalCount();

  return (
    <div>
      <h1>Bands ({count})</h1>

      <ul>
        {bands.map((band) => (
          <li key={band.id}>
            <a href={`/bands/${band.id}`}>{band.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
