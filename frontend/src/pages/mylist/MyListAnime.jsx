import { BsCcSquare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
function MyListAnime({ anime }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-2/5">
          <img
            src={anime.anime_poster}
            className="bg-cover object-cover h-72"
            alt=""
          />
        </div>
        <div className="bg-[#e9ecef] overflow-hidden p-4  w-3/5 h-72">
          <div className="h-1/6">
            <div className="flex justify-end">
              <button href="#">
                {/* bookmark button */}
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
                  <div className="flex flex-row items-center">
                    <IoIosStarOutline className="size-4" />
                    {anime.anime_score || "N/A"}
                  </div>
                  <div className="flex flex-row items-center">
                    <BsCcSquare className="size-4" />
                    {anime.episodes || "N/A"}
                  </div>
                  <div>{anime.type}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyListAnime;
