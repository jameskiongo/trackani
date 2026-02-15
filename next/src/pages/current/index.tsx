// pages/current.tsx

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

export default function CurrentAiringAnime() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  const { data, error, isLoading } = useSWR<AnimeResponse>(
    `/api/current-season?page=${currentPage}&limit=${itemsPerPage}`,
    fetcher,
    {
      revalidateOnFocus: false, // Optional: disable auto-refresh on tab focus
      keepPreviousData: true, // Keep showing old data while loading new page
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
      <div className="w-full bg-white min-h-screen flex items-center justify-center">
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
    <div className="p-4 space-y-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="rounded-full bg-blue-50 p-1.5">
            <MdArrowCircleRight className="size-5 text-blue-600" />
          </div>
          <Link href="/current" className="group">
            <h1 className="text-lg font-bold uppercase tracking-wide text-gray-800 transition-colors group-hover:text-blue-600">
              Currently Airing
            </h1>
          </Link>
        </div>
        {/* Pagination */}
        <nav className="flex items-center gap-1" aria-label="Pagination">
          <button
            type="button"
            disabled={currentPage === 1 || isLoading}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Previous page"
            onClick={handlePreviousPage}
          >
            <MdKeyboardArrowLeft className="size-5" />
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
            <MdKeyboardArrowRight className="size-5" />
          </button>
        </nav>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">{content}</div>
    </div>
  );
}
