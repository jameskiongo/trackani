import Link from "next/link";
import { BsCcSquare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import type { Anime } from "@/types/anime";

interface AnimeCardProps {
  anime: Anime;
}

function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div className="group flex flex-row overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Image with scale animation */}
      <div className="relative w-2/5 overflow-hidden">
        <img
          src={anime.images.webp.large_image_url}
          className="h-72 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          alt={anime.title}
        />

        {/* Bookmark (top-right on image, hidden until hover) */}
        <button
          type="button"
          className="absolute top-2 right-2 z-20 rounded-full bg-white/90 p-1.5 text-gray-600 shadow-md transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-blue-500 hover:text-white active:scale-90 backdrop-blur-[2px]"
        >
          <CiBookmark className="size-6" />
        </button>
      </div>

      {/* Content */}
      {/* <div className="flex w-3/5 flex-col bg-gradient-to-br from-white to-gray-50/50 p-6"> */}
      <div className="flex w-3/5 flex-col justify-center bg-gradient-to-br from-white to-gray-50/50 p-6">
        {/* Title & Synopsis */}
        <div className="mt-2 space-y-3">
          <Link href={`/anime/${anime.mal_id}`}>
            <h1 className="line-clamp-2 text-lg font-bold leading-tight text-gray-900 transition-colors hover:text-blue-600">
              {anime.title}
            </h1>
          </Link>

          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
            {anime.synopsis || "No synopsis available."}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-sm">
            <IoIosStarOutline className="size-3.5 text-yellow-500" />
            <span className="font-normal text-xs text-gray-700">
              {anime.score || "N/A"}
            </span>
          </span>
          <span className="flex items-center gap-1.5 text-sm">
            <BsCcSquare className="size-3.5 text-blue-600" />
            <span className="font-normal text-xs text-gray-700">
              {anime.episodes || "?"} eps
            </span>
          </span>
          {anime.type && (
            <span className="rounded-md  text-xs font-normal text-purple-700">
              {anime.type}
            </span>
          )}
        </div>

        {/* Genres */}
        {anime.genres && anime.genres?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {anime.genres?.map((genre) => (
              <span
                key={genre.mal_id}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
              >
                {genre.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimeCard;
