import { Link } from "react-router-dom";
import TitleDescription from "../../components/homepage/TitleDescription";
import { useGetSearchAnimeQuery } from "../../services";
import { useSearchParams } from "react-router-dom";
function SearchPage() {
  const [searchParams] = useSearchParams();
  const term = searchParams.get("q") || "";
  const {
    data: items,
    isError,
    isLoading,
    isFetching,
  } = useGetSearchAnimeQuery({
    term: term,
  });

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
          <Link to="/current">
            <h1 className="uppercase font-bold px-1">Search: {term}</h1>
          </Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-40">
        {content}
      </div>
    </div>
  );
}

export default SearchPage;
