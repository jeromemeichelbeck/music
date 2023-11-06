import { getBands, getBandsTotalCount } from "@/server/models/bands";

export default async function BandsPage() {
  const bands = await getBands();
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
