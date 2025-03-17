import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useGetSearchAnimeQuery } from "../../services";
import SearchResults from "../search/SearchResults";
function SearchBar() {
  //BUG:The Searchbar component does not dissapear after selecting an item, or clicking outside the search bar
  const [term, setTerm] = useState("");
  const debouncedQuery = useDebounce(term, 500); // Wait 500ms before fetching
  const [visible, setVisible] = useState(false);
  const itemsPerPage = 4;
  const { data, error, isLoading, isFetching } = useGetSearchAnimeQuery(
    {
      term: term,
      limit: itemsPerPage,
    },
    {
      skip: debouncedQuery.length < 3,
    },
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm("");
  };
  return (
    <>
      <div className="flex flex-col lg:w-full">
        <div className="relative bg-offwhite lg:w-10/12">
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
            <svg
              className="shrink-0 size-4 text-black "
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
                setVisible(true);
              }}
              className="py-2 ps-10 pe-4 block w-full border-gray-500 placeholder-black rounded-lg text-sm focus:border-blue-500 focus:ring-blue-50 disabled:opacity-50 disabled:pointer-events-none "
              type="text"
              placeholder="Search Anime"
            />
          </form>
        </div>

        {visible && debouncedQuery && (
          <div className="absolute bg-offwhite top-14 p-4 w-5/12">
            {isLoading || isFetching ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error fetching data</p>
            ) : data?.data?.length > 0 ? (
              <ul>
                {data.data.map((anime) => (
                  <SearchResults key={anime.mal_id} anime={anime} />
                ))}
              </ul>
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
