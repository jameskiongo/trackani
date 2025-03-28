import ListTopAnime from "./ListTopAnime";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdArrowCircleRight } from "react-icons/md";
import { useGetTopAiringQuery } from "../../services";
import { useState } from "react";
import { Link } from "react-router-dom";
function TopAiringAnime() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const {
    data: items,
    isError,
    isLoading,
    isFetching,
  } = useGetTopAiringQuery({
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
      return <ListTopAnime key={anime.mal_id} anime={anime} />;
    });
  }
  return (
    <>
      <div className="p-4">
        <div className="py-2">
          <div className="flex flex-row items-center justify-start">
            <MdArrowCircleRight className="size-5" />
            <Link to="/top">
              <h1 className="uppercase font-bold px-1">Top Anime</h1>
            </Link>
          </div>
        </div>
        {content}
        {isLoading || isFetching ? null : (
          <>
            <nav className="flex flex-row justify-between items-center">
              <button
                className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handlePreviousPage}
                disabled={currentPage === 1 || isFetching}
              >
                <GoArrowLeft className="size-6" />
              </button>
              <button
                type="button"
                className="min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden cursor-default focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-current="page"
              >
                Page {currentPage}
              </button>

              <button
                className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleNextPage}
                disabled={!items?.pagination?.has_next_page || isFetching}
              >
                <GoArrowRight className="size-6" />
              </button>
            </nav>
          </>
        )}
      </div>
    </>
  );
}

export default TopAiringAnime;
