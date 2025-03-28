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
