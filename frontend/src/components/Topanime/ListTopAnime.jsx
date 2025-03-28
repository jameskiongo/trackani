import { Link } from "react-router-dom";
import { BsCcSquare } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

function ListTopAnime({ anime }) {
  return (
    <>
      <div className="flex my-1 flex-row">
        <div className="">
          <img
            src={anime.images.webp.image_url}
            className="size-28 bg-cover"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-y-1 px-3 bg-[#e9ecef]">
          <div className="">
            <Link
              to={`/anime/${anime.mal_id}`}
              className="capitalize leading-tight tracking-normal text-sm font-semibold"
            >
              {anime.title}
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-x-2 items-center justify-start text-xs capitalize">
              <div className="flex flex-row items-center justify-center gap-x-1">
                <IoIosStarOutline className="size-3" />
                {anime.score}
              </div>
              <div className="flex flex-row items-center justify-center gap-x-1">
                <BsCcSquare className="size-4" />
                {anime.episodes}
              </div>
              <div>{anime.type}</div>
            </div>
            <div className="w-auto">
              <a href="#">
                <CiBookmark className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListTopAnime;
