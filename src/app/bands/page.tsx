import type { PageProps } from "@/@types/page.props";
import { getBands, getBandsTotalCount } from "@/server/models/band.model";
import Paginator from "../components/navigation/pagination/paginator";

type BandsPageProps = PageProps<[], ["page", "pageSize"]>;

export default async function BandsPage({ searchParams }: BandsPageProps) {
  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 10;

  const bands = await getBands({ page, pageSize });
  const count = await getBandsTotalCount();

  const totalPages = Math.ceil(count / pageSize);

  return (
    <div>
      <h1>Bands ({count})</h1>

      <ul>
        {bands.map((band) => (
          <li key={band.id}>
            <a href={`/bands/${band.id}`}>{band.name}</a> From{" "}
            {band.town?.name ?? "prout"}, {band.town?.area?.name ?? "lol"},{" "}
            {band.town?.area?.country?.name ?? "wut"} (
            {band.bandGenres.map(({ genre }) => genre.name).join(", ")})
          </li>
        ))}
      </ul>
      <Paginator currentPage={page} totalPages={totalPages} />
    </div>
  );
}
