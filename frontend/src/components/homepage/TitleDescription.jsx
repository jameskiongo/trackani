import { Link } from "react-router-dom";
import { BsCcSquare } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
// import { useBookmarkAnimeMutation } from "../../services";
// import toast from "react-hot-toast";
// import { useState } from "react";

function TitleDescription({ anime }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-2/5">
          <img
            src={anime.images.webp.large_image_url}
            className="bg-cover object-cover h-72"
            alt=""
          />
        </div>
        <div className="bg-[#e9ecef] overflow-hidden p-4  w-3/5 h-72">
          <div className="h-1/6">
            <div className="flex justify-end">
              <button href="#">
                <CiBookmark className="size-7" />
              </button>
            </div>
          </div>
          <div className="flex justify-center h-4/6 items-center">
            <div className="flex flex-col overflow-hidden">
              <Link to={`/anime/${anime.mal_id}`}>
                <h1 className="font-extrabold py-1 text-sm line-clamp-2 overflow-hidden">
                  {anime.title}
                </h1>
              </Link>
              <div className="">
                <p className="text-sm line-clamp-4">{anime.synopsis}</p>
              </div>
              <div className="w-full py-2">
                <div className="flex flex-row gap-x-6 items-center w-full text-sm capitalize">
                  <div className="flex flex-row items-center justify-center gap-x-1">
                    <IoIosStarOutline className="size-4" />
                    {anime.score || "N/A"}
                  </div>
                  <div className="flex flex-row items-center justify-center gap-x-1">
                    <BsCcSquare className="size-4" />
                    {anime.episodes || "N/A"}
                  </div>
                  <div>{anime.type}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/6 flex flex-nowrap justify-start items-center">
            {anime.genres.map((genre) => (
              <>
                <span
                  type=""
                  key={genre.mal_id}
                  className="button cursor-default py-3 px-1 inline-flex items-center text-xs capitalize font-medium"
                >
                  {genre.name}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleDescription;
