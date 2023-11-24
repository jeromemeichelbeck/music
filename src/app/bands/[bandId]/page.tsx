import type { PageProps } from "@/@types/page.props";
import { getBandById } from "@/server/models/band.model";
import { notFound } from "next/navigation";

type BandPageProps = PageProps<["bandId"], []>;

export default async function BandPage({ params }: BandPageProps) {
  const bandId = parseInt(params.bandId, 10);

  if (isNaN(bandId)) {
    notFound();
  }

  const band = await getBandById(bandId);

  if (!band) {
    notFound();
  }

  return (
    <div>
      <h1>{band.name}</h1>
      <p>{band.summary}</p>
      <p>{band.description}</p>
      <p>{band.town.name}, {band.town.area.country.name}</p>
    </div>
  );
}
