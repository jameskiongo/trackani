import { useState } from "react";
import {
  MdArrowCircleRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import TitleDescription from "../../components/homepage/TitleDescription";
import { useGetUpcomingSeasonQuery } from "../../services";
function UpcomingAnime() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;
  const {
    data: items,
    isError,
    isLoading,
    isFetching,
  } = useGetUpcomingSeasonQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  let content;

  if (isLoading || isFetching) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Something went wrong</p>;
  } else if (!items.data || items.data.length === 0) {
    content = <p>No anime found.</p>;
  } else {
    content = items.data.map((anime) => {
      return <TitleDescription key={anime.mal_id} anime={anime} />;
    });
  }
  return (
    <div className="p-4 ">
      <div className="py-2 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-start">
          <MdArrowCircleRight className="size-5" />
          <h1 className="uppercase font-bold px-1">Upcoming Anime</h1>
        </div>
        <div>
          <nav
            className="flex items-center -space-x-px"
            aria-label="Pagination"
          >
            <button
              type="button"
              disabled={currentPage === 1 || isFetching}
              className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Previous"
              onClick={handlePreviousPage}
            >
              <MdKeyboardArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center cursor-default bg-[#e9ecef] border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              {currentPage}
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Next"
              onClick={handleNextPage}
              disabled={!items?.pagination?.has_next_page || isFetching}
            >
              <MdKeyboardArrowRight className="size-4" />
            </button>
          </nav>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-40">
        {content}
      </div>
    </div>
  );
}

export default UpcomingAnime;
