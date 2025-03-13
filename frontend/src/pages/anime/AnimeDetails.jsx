import YouTubeEmbed from "../../components/animedetails/YoutubePlayer";
import { useGetAnimeDetailsQuery } from "../../services";
import { useParams } from "react-router-dom";

function AnimeDetails() {
  const { mal_id } = useParams();
  const { data, isError, isLoading } = useGetAnimeDetailsQuery(mal_id);
  return (
    <div className="w-full">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      <div className="relative w-full h-80 ">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0  to-white/100"></div>
        <img
          src={data?.data?.trailer?.images?.maximum_image_url}
          // src={data?.data?.images?.webp?.large_image_url}
          alt={data?.data?.title_english + "banner"}
          className="w-full h-80 object-cover object-center"
        />
      </div>
      <div className="flex p-5 flex-row -mt-32">
        <div className="w-3/12 z-50">
          <div className="px-6">
            <img
              src={data?.data?.images?.webp?.large_image_url}
              alt={data?.data?.title_english + "poster"}
              className="h-full w-full z-50 rounded-lg"
            />
          </div>
          <div className="px-6 py-4">
            <div className="pb-3">
              <button
                type="button"
                className="w-full py-3 gap-x-2 px-4 flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-gray-300 bg-[#D9EAFD] text-white hover:bg-gray-50 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <span className="text-black text-lg capitalize">
                  Add to list
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M6 19.5V4h12v15.5l-6-2.583zm1-1.55l5-2.15l5 2.15V5H7zM7 5h10z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-row gap-2">
              <button
                type="button"
                className="w-full py-3 px-4 flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-gray-300 bg-[#D9EAFD] text-white hover:bg-gray-50 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-9"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#000"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M34.179 31.029V14.793h4.152v12.533H43.5l-1.008 3.701zm-1.786-12.4H28.25c-1.446 0-2.927.85-3.86 3.493h3.85V18.9m4.153-.271v12.4h-4.152v-5.422h-4.703c.176 1.721.866 3.574 1.835 5.165l-3.31 2.435c-1.913-3.2-2.875-7.272-1.651-12.052c1.072-4.186 3.997-6.326 7.841-6.326h3.504l1.083 3.802h-.448M8.71 14.793H4.5V31.03h4.152v-9.207l3.115 4.254l3.114-4.254v9.207h4.152V14.793h-4.21l-3.056 4.175z"
                    strokeWidth={1}
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="w-full py-3 px-4 flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-gray-300 bg-[#D9EAFD] text-white hover:bg-gray-50 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-9"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M24 17.53v2.421c0 .71-.391 1.101-1.1 1.101h-5l-.057-.165L11.84 3.736c.106-.502.46-.788 1.053-.788h2.422c.71 0 1.1.391 1.1 1.1v12.38H22.9c.71 0 1.1.392 1.1 1.101zM11.034 2.947l6.337 18.104h-4.918l-1.052-3.131H6.019l-1.077 3.131H0L6.361 2.948h4.673zm-.66 10.96l-1.69-5.014l-1.541 5.015h3.23z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="px-6">
            <div className="border border-gray-300 rounded-lg p-4">
              <div>
                <h1 className="font-bold text-lg py-1">Premiered</h1>
                <p className="capitalize text-xs font-medium">
                  {data?.data?.aired.string}
                </p>
              </div>
              <div className="overflow-hidden leading-none m-0">
                <h1 className="font-bold text-lg py-1">Genres</h1>
                {data?.data?.genres.map((genre) => (
                  <span
                    key={genre.mal_id}
                    className="pr-2 text-xs capitalize font-medium"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <div>
                <h1 className="font-bold text-lg py-1">Season</h1>
                <p className="text-xs capitalize font-medium">
                  {data?.data?.season}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-lg py-1">Rating</h1>
                <p className="text-xs capitalize font-medium">
                  {data?.data?.rating}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-lg py-1">Studio</h1>
                <p className="text-xs capitalize font-medium">
                  {data?.data?.studios[0]?.name}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-lg py-1">Source Material</h1>
                <p className="text-xs capitalize font-medium">
                  {data?.data?.source}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-lg py-1">English Title</h1>
                <p className="text-xs capitalize font-medium">
                  {data?.data?.title_english}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-9/12 z-50 flex mt-32 ">
          <div className="w-full p-6 rounded-lg">
            <div className="flex flex-row justify-between">
              <h1 className="font-bold text-2xl">{data?.data?.title}</h1>
            </div>
            <div className="py-2">
              <div className="inline-flex rounded-lg shadow-2xs">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg bg-[#D9EAFD] text-sm font-medium focus:z-10 border border-gray-300  text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {data?.data?.type || "N/A"}
                </button>
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm bg-[#D9EAFD] font-medium focus:z-10 border border-gray-300 text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {data?.data?.episodes || "N/A"} Ep
                </button>

                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium bg-[#D9EAFD] focus:z-10 border border-gray-300 text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {data?.data?.year || "N/A"}
                </button>
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium bg-[#D9EAFD] focus:z-10 border border-gray-300 text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {data?.data?.score || "N/A"}
                </button>
              </div>
            </div>
            <div className="py-2">
              <h2 className="font-bold text-xl">Synopsis</h2>
              <p>{data?.data?.synopsis}</p>
            </div>
            <div className="w-full py-2">
              <YouTubeEmbed videoId={data?.data?.trailer?.youtube_id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
