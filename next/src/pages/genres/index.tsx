import Link from "next/link";
import { type ReactNode, useState } from "react";
import Select from "react-select";
import useSWR from "swr";
import AnimeCard from "@/components/homepage/AnimeCard";
import type { AnimeResponse } from "@/types/anime";
import { filterRating, filterStatus, filterType } from "./data";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface GenreOption {
  value: number;
  label: string;
}

export default function GenresPage() {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);

  // Fetch genres
  const { data: genresData, isLoading: isGenresLoading } = useSWR(
    "/api/genres",
    fetcher,
  );

  // Build genre options
  const genreOptions: GenreOption[] =
    genresData?.data?.map((genre: any) => ({
      value: genre.mal_id,
      label: genre.name,
    })) || [];

  // Build query string
  const buildQueryString = () => {
    const params = new URLSearchParams();
    if (selectedGenres.length > 0) {
      params.append("genres", selectedGenres.join(","));
    }
    if (selectedStatus) params.append("status", selectedStatus);
    if (selectedType) params.append("type", selectedType);
    if (selectedRating) params.append("rating", selectedRating);
    return params.toString();
  };

  const queryString = buildQueryString();

  // Fetch filtered anime
  const endpoint = queryString
    ? `/api/filtered-anime?${queryString}`
    : "/api/filtered-anime";
  const { data, error, isLoading } = useSWR<AnimeResponse>(endpoint, fetcher, {
    revalidateOnFocus: false,
    keepPreviousData: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  let content: ReactNode;

  if (isLoading) {
    content = <p>Loading...</p>;
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
    <div className="p-6 bg-white">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Genres */}
            <div className="space-y-1.5">
              <h1 className="text-xs font-bold uppercase tracking-wide text-gray-500">
                Genres
              </h1>
              <Select
                options={genreOptions}
                isMulti
                isLoading={isGenresLoading}
                onChange={(selected) => {
                  setSelectedGenres(selected.map((genre) => genre.value));
                }}
                placeholder={
                  isGenresLoading ? "Loading genres..." : "Select genres..."
                }
                className="basic-multi-select"
                classNamePrefix="select"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 6,
                  colors: {
                    ...theme.colors,
                    primary: "#2563eb",
                    primary25: "#eff6ff",
                    primary50: "#dbeafe",
                    neutral20: "#d1d5db",
                    neutral30: "#9ca3af",
                  },
                })}
              />
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <h1 className="text-xs font-bold uppercase tracking-wide text-gray-500">
                Status
              </h1>
              <Select
                options={filterStatus}
                isLoading={isLoading}
                onChange={(selected) =>
                  setSelectedStatus(selected ? selected.value : null)
                }
                placeholder={
                  isLoading ? "Loading status..." : "Select status..."
                }
                className="basic-multi-select"
                classNamePrefix="select"
                isClearable
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 6,
                  colors: {
                    ...theme.colors,
                    primary: "#2563eb",
                    primary25: "#eff6ff",
                    primary50: "#dbeafe",
                    neutral20: "#d1d5db",
                    neutral30: "#9ca3af",
                  },
                })}
              />
            </div>

            {/* Type */}
            <div className="space-y-1.5">
              <h1 className="text-xs font-bold uppercase tracking-wide text-gray-500">
                Type
              </h1>
              <Select
                options={filterType}
                isLoading={isLoading}
                placeholder={isLoading ? "Loading types..." : "Select type..."}
                onChange={(selected) =>
                  setSelectedType(selected ? selected.value : null)
                }
                className="basic-multi-select"
                classNamePrefix="select"
                isClearable
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 6,
                  colors: {
                    ...theme.colors,
                    primary: "#2563eb",
                    primary25: "#eff6ff",
                    primary50: "#dbeafe",
                    neutral20: "#d1d5db",
                    neutral30: "#9ca3af",
                  },
                })}
              />
            </div>

            {/* Rating */}
            <div className="space-y-1.5">
              <h1 className="text-xs font-bold uppercase tracking-wide text-gray-500">
                Rating
              </h1>
              <Select
                options={filterRating}
                isLoading={isLoading}
                placeholder={
                  isLoading ? "Loading rating..." : "Select rating..."
                }
                onChange={(selected) =>
                  setSelectedRating(selected ? selected.value : null)
                }
                className="basic-multi-select"
                classNamePrefix="select"
                isClearable
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 6,
                  colors: {
                    ...theme.colors,
                    primary: "#2563eb",
                    primary25: "#eff6ff",
                    primary50: "#dbeafe",
                    neutral20: "#d1d5db",
                    neutral30: "#9ca3af",
                  },
                })}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Content Grid */}
      <div className="py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content}
        </div>
      </div>
    </div>
  );
}
