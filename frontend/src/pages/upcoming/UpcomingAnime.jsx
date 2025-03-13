import { useState } from "react";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <defs>
              <mask id="ipSRightC0">
                <g fill="none" strokeLinejoin="round" strokeWidth="4">
                  <path
                    fill="#fff"
                    stroke="#fff"
                    d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                  />
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    d="m21 33l9-9l-9-9"
                  />
                </g>
              </mask>
            </defs>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipSRightC0)"
            />
          </svg>
          <h1 className="uppercase font-bold px-1">next season</h1>
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
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
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
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
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
