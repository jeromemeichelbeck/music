import Link from "next/link";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
};

export default function Paginator({ currentPage, totalPages }: PaginatorProps) {
  const disablePrevious = currentPage === 1;
  const disableNext = currentPage === totalPages;

  return (
    <nav>
      <Link
        href={`/bands?page=${currentPage - 1}`}
        className={disablePrevious ? "pointer-events-none" : ""}
        tabIndex={disablePrevious ? -1 : undefined}
        aria-disabled={disablePrevious}
      >
        Previous
      </Link>
      <span>{currentPage}</span>
      <Link
        href={`/bands?page=${currentPage + 1}`}
        className={disableNext ? "pointer-events-none" : ""}
        tabIndex={disableNext ? -1 : undefined}
        aria-disabled={disableNext}
      >
        Next
      </Link>
    </nav>
  );
}
