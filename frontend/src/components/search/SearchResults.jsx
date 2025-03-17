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
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"
                  />
                </svg>
                {anime.score}
              </div>
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 4c-.55 0-1 .18-1.41.57C3.2 4.96 3 5.44 3 6v12c0 .56.2 1.04.59 1.43c.41.39.86.57 1.41.57h14c.5 0 1-.19 1.39-.59c.41-.41.61-.88.61-1.41V6c0-.53-.2-1-.61-1.41C20 4.19 19.5 4 19 4zm-.5 1.5h15v13h-15zM7 9c-.3 0-.53.09-.72.28S6 9.7 6 10v4c0 .3.09.53.28.72S6.7 15 7 15h3c.27 0 .5-.09.71-.28c.2-.19.29-.42.29-.72v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.3-.09-.53-.29-.72C10.5 9.09 10.27 9 10 9zm7 0c-.27 0-.5.09-.71.28c-.2.19-.29.42-.29.72v4c0 .3.09.53.29.72c.21.19.44.28.71.28h3c.3 0 .53-.09.72-.28S18 14.3 18 14v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.3-.09-.53-.28-.72S17.3 9 17 9z"
                  />
                </svg>
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
