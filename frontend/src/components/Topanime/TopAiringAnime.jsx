import ListTopAnime from "./ListTopAnime";
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.222 9.897q3.45-3.461 6.744-6.754a.65.65 0 0 0 0-.896c-.311-.346-.803-.316-1.027-.08Q9.525 5.59 5.796 9.322q-.296.243-.296.574t.296.592l7.483 7.306a.75.75 0 0 0 1.044-.029c.358-.359.22-.713.058-.881a3408 3408 0 0 1-7.16-6.988"
                  ></path>
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m7.053 2.158l7.243 7.256a.66.66 0 0 1 .204.483a.7.7 0 0 1-.204.497q-3.93 3.834-7.575 7.401c-.125.117-.625.408-1.011-.024c-.386-.433-.152-.81 0-.966l7.068-6.908l-6.747-6.759q-.369-.509.06-.939q.43-.43.962-.04"
                  ></path>
                </svg>
              </button>
            </nav>
          </>
        )}
      </div>
    </>
  );
}

export default TopAiringAnime;
