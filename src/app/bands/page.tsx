import { getBands, getBandsTotalCount } from "@/server/models/band.model";

export default async function BandsPage() {
  const bands = await getBands({ page: 1, pageSize: 10 });
  const count = await getBandsTotalCount();

  console.log("bands", bands);

  return (
    <div>
      <h1>Bands ({count})</h1>

      <ul>
        {bands.map((band) => (
          <li key={band.id}>
            <a href={`/bands/${band.id}`}>{band.name}</a> From {band.town.name},{" "}
            {band.town.area.name}, {band.town.area.country.name} (
            {band.bandGenres.map(({ genre }) => genre.name).join(", ")})
          </li>
        ))}
      </ul>
    </div>
  );
}
