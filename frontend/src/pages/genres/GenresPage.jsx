import { useGetFilteredAnimeQuery } from "../../services";
import Select from "react-select";
import { Link } from "react-router-dom";
import { filterType, filterRating, filterStatus } from "./data";
import { useState } from "react";
import { useGenres } from "../../hooks/useGenres";
import TitleDescription from "../../components/homepage/TitleDescription";

function GenresPage() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  // Use the custom hook for genres
  const {
    options,
    isLoading: isGenresLoading,
    isFetching: isGenresFetching,
  } = useGenres();

  // Use the filtered anime query
  const {
    data,
    isError,
    isLoading: isFilterLoading,
    isFetching: isFilterFetching,
  } = useGetFilteredAnimeQuery({
    genres: selectedGenres,
    status: selectedStatus,
    type: selectedType,
    rating: selectedRating,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  let content;
  if (isFilterLoading || isFilterFetching) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Something went wrong</p>;
  } else if (!data.data || data.data.length === 0) {
    content = <p>No anime found.</p>;
  } else {
    content = data.data.map((anime) => {
      return <TitleDescription key={anime.mal_id} anime={anime} />;
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
        <div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-row justify-between gap-x-4">
              <div className="w-full">
                <h1 className="uppercase font-bold">Genres</h1>
                <Select
                  options={options}
                  isMulti
                  isLoading={isGenresLoading || isGenresFetching}
                  onChange={(selected) => {
                    setSelectedGenres(selected.map((genre) => genre.value));
                  }}
                  placeholder={
                    isGenresLoading || isGenresFetching
                      ? "Loading genres..."
                      : "Select genres..."
                  }
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="w-full">
                <h1 className="uppercase font-bold">status</h1>
                <Select
                  options={filterStatus}
                  isLoading={isFilterLoading || isFilterFetching}
                  onChange={(selected) =>
                    setSelectedStatus(selected ? selected.value : null)
                  }
                  placeholder={
                    isFilterLoading || isFilterFetching
                      ? "Loading status..."
                      : "Select status..."
                  }
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="w-full">
                <h1 className="uppercase font-bold">type</h1>
                <Select
                  options={filterType}
                  isLoading={isFilterLoading || isFilterFetching}
                  placeholder={
                    isFilterLoading || isFilterFetching
                      ? "Loading types..."
                      : "Select type..."
                  }
                  onChange={(selected) =>
                    setSelectedType(selected ? selected.value : null)
                  }
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="w-full">
                <h1 className="uppercase font-bold">rating</h1>
                <Select
                  options={filterRating}
                  isLoading={isFilterLoading || isFilterFetching}
                  placeholder={
                    isFilterLoading || isFilterFetching
                      ? "Loading rating..."
                      : "Select rating..."
                  }
                  onChange={(selected) =>
                    setSelectedRating(selected ? selected.value : null)
                  }
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="py-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grids-cols-3 gap-4 h-40">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

export default GenresPage;
