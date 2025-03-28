import { Link } from "react-router-dom";
import TitleDescription from "../../components/homepage/TitleDescription";
import { useGetSearchAnimeQuery } from "../../services";
import { useSearchParams } from "react-router-dom";
import { MdArrowCircleRight } from "react-icons/md";
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
          <MdArrowCircleRight className="size-5" />
          <span>
            <h1 className="uppercase font-bold px-1">Search: {term}</h1>
          </span>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-40">
        {content}
      </div>
    </div>
  );
}

export default SearchPage;
