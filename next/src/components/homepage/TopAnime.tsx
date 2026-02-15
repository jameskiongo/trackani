import Link from "next/link";
import { type ReactNode, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdArrowCircleRight } from "react-icons/md";
import useSWR from "swr";
import type { AnimeResponse } from "@/types/anime";
import ListTopAnime from "./ListTopAnime";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TopAiringAnime() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { data, error, isLoading } = useSWR<AnimeResponse>(
    `/api/top-airing?page=${currentPage}&limit=${itemsPerPage}`,
    fetcher,
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  let content: ReactNode;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Something went wrong</p>;
  } else if (!data?.data || data.data.length === 0) {
    content = <p>No anime found.</p>;
  } else {
    content = data.data.map((anime) => (
      <ListTopAnime key={anime.mal_id} anime={anime} />
    ));
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="rounded-full bg-blue-50 p-1.5">
          <MdArrowCircleRight className="size-5 text-blue-600" />
        </div>
        <Link href="/top" className="group">
          <h1 className="text-lg font-bold uppercase tracking-wide text-gray-800 transition-colors group-hover:text-blue-600">
            Top Airing
          </h1>
        </Link>
      </div>
      {content}
      {!isLoading && (
        <nav className="flex items-center gap-1" aria-label="Pagination">
          <button
            type="button"
            disabled={currentPage === 1 || isLoading}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Previous page"
            onClick={handlePreviousPage}
          >
            <GoArrowLeft className="size-5" />
          </button>
          <span className="flex h-9 min-w-[2.5rem] items-center justify-center rounded-lg bg-blue-50 px-3 text-sm font-semibold text-blue-600">
            {currentPage}
          </span>
          <button
            type="button"
            disabled={!data?.pagination?.has_next_page || isLoading}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Next page"
            onClick={handleNextPage}
          >
            <GoArrowRight className="size-5" />
          </button>
        </nav>
      )}
    </div>
  );
}
