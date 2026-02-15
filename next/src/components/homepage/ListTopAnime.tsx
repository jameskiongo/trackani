import Link from "next/link";
import { BsCcSquare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import type { Anime } from "@/types/anime";

interface ListTopAnimeProps {
  anime: Anime;
}

function ListTopAnime({ anime }: ListTopAnimeProps) {
  return (
    <div className="group relative my-2 flex flex-row overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-32 w-28 flex-shrink-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />

        {/* Bookmark Button - Now positioned on the image */}

        <button
          type="button"
          className="absolute top-2 right-2 z-20 rounded-full bg-white/90 p-1.5 text-gray-600 shadow-md transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-blue-500 hover:text-white active:scale-90 backdrop-blur-[2px]"
          aria-label="Bookmark anime"
        >
          <CiBookmark className="size-4" />
        </button>
        <img
          src={anime.images.webp.image_url}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          alt={anime.title}
        />
      </div>

      <div className="flex w-full flex-col justify-center gap-y-2 bg-gradient-to-r from-white to-gray-50 px-4 py-3">
        <Link
          href={`/anime/${anime.mal_id}`}
          className="line-clamp-2 text-xs font-bold capitalize leading-tight text-gray-800 transition-colors hover:text-blue-600"
        >
          {anime.title}
        </Link>

        <div className="flex w-full flex-row items-start justify-between">
          <div className="flex flex-nowrap items-center gap-0 text-xs">
            {/* Score Badge */}
            <div className="flex items-center gap-1 rounded-full px-2 py-1">
              <IoIosStarOutline className="size-3 text-yellow-600" />
              <span className="font-normal text-xs">
                {anime.score || "N/A"}
              </span>
            </div>

            {/* Episodes Badge */}
            <div className="flex flex-row items-center gap-1 rounded-full px-2 py-1">
              <BsCcSquare className="size-3 text-blue-600" />
              <span className="font-normal text-xs">
                {anime.episodes || "?"} ep
              </span>
            </div>

            {/* Type Badge */}
            <div className="rounded-full px-2.5 py-1 font-medium text-purple-700">
              <span className="font-normal text-xs">
                {anime.type || "Unknown"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTopAnime;
