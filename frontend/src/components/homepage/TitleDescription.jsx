function TitleDescription({ anime }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-2/5">
          <img
            // src="https://cdn.myanimelist.net/images/anime/1015/138006l.webp"
            src={anime.images.webp.large_image_url}
            className="bg-cover h-72"
            alt=""
          />
        </div>
        <div className="bg-[#e9ecef] overflow-hidden p-4  w-3/5 h-72">
          <div className="h-1/6">
            <div className="flex justify-end">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-9"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center h-4/6 items-center">
            <div className="flex flex-col overflow-hidden">
              <h1 className="font-extrabold py-1 text-sm line-clamp-2 overflow-hidden">
                {anime.title}
              </h1>
              <div className="">
                <p className="text-sm line-clamp-4">{anime.synopsis}</p>
              </div>
              <div className="w-full py-2">
                <div className="flex flex-row gap-x-6 items-center w-full text-sm capitalize">
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
                    {anime.score || "N/A"}
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
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/6 flex flex-nowrap justify-start items-center">
            {anime.genres.map((genre) => (
              <button
                type=""
                key={genre.mal_id}
                className="button cursor-default py-3 px-2 inline-flex items-center gap-x-2 text-xs capitalize font-medium"
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleDescription;
