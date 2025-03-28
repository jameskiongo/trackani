import { BsCcSquare } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function SearchResults({ anime }) {
  return (
    <div className="w-full">
      <Link to={`/anime/${anime.mal_id}`}>
        <div className="flex flex-row w-full p-1">
          <div>
            <img
              src={anime.images.webp.image_url}
              className="size-28 bg-cover object-cover"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col hover:bg-[#D9EAFD] items-start justify-center gap-y-1 px-3 bg-[#e9ecef]">
            <p className="capitalize text-xs font-medium">{anime.title}</p>
            <div className="flex flex-row gap-x-2 items-center justify-start text-xs capitalize">
              <div className="flex flex-row items-center justify-center gap-x-1">
                <IoIosStarOutline className="size-4" />
                {anime.score}
              </div>
              <div className="flex flex-row items-center justify-center gap-x-1">
                <BsCcSquare className="size-4" />
                {anime.episodes}
              </div>
              <div>{anime.type}</div>
              <p>{anime.aired.prop.from.year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchResults;
