import Link from "next/link";
import { type ReactNode, useState } from "react";
import {
  MdArrowCircleRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import useSWR from "swr";
import AnimeCard from "@/components/homepage/AnimeCard";
import type { AnimeResponse } from "@/types/anime";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TopAnime() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

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
    content = (
      <div className="w-full bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      </div>
    );
  } else if (error) {
    content = <p>Something went wrong</p>;
  } else if (!data?.data || data.data.length === 0) {
    content = <p>No anime found.</p>;
  } else {
    content = data.data.map((anime) => (
      <AnimeCard key={anime.mal_id} anime={anime} />
    ));
  }

  return (
    <div className="p-4 sm:p-6 bg-white">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-50">
            <MdArrowCircleRight className="size-5 text-blue-600" />
          </div>
          <Link href="/top" className="group">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
              Top Anime
            </h1>
          </Link>
          {/* Uncomment if you want to show total count */}
          {/* {data?.pagination?.items?.total && (
            <span className="ml-2 px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {data.pagination.items.total}
            </span>
          )} */}
        </div>
        {/* Pagination */}
        <nav className="flex items-center gap-1" aria-label="Pagination">
          <button
            type="button"
            disabled={currentPage === 1 || isLoading}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Previous page"
            onClick={handlePreviousPage}
          >
            <MdKeyboardArrowLeft className="size-5" />
          </button>
          <span className="flex h-9 min-w-[2.5rem] items-center justify-center rounded-lg bg-blue-50 px-3 text-sm font-semibold text-blue-600 border border-blue-200">
            {currentPage}
          </span>
          <button
            type="button"
            disabled={!data?.pagination?.has_next_page || isLoading}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Next page"
            onClick={handleNextPage}
          >
            <MdKeyboardArrowRight className="size-5" />
          </button>
        </nav>
      </div>
      {/* Content Grid - 3 cards max */}
      <div className="py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content}
        </div>
      </div>
    </div>
  );
}
