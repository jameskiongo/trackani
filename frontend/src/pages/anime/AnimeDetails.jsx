import { CiBookmark } from "react-icons/ci";
import { SiMyanimelist } from "react-icons/si";
import YouTubeEmbed from "../../components/animedetails/YoutubePlayer";
import { useGetAnimeDetailsQuery } from "../../services";
import { useParams } from "react-router-dom";

function AnimeDetails() {
  const { mal_id } = useParams();
  const { data, isError, isLoading, isFetching } =
    useGetAnimeDetailsQuery(mal_id);
  if (isLoading || isFetching) {
    return <p className="p-5">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 font-bold">Something went wrong</p>
    );
  }
  return (
    <div className="w-full">
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
            <div className="flex flex-row gap-2">
              <button
                type="button"
                className="w-full py-3 gap-x-2 px-4 flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-gray-300 bg-[#D9EAFD] text-white hover:bg-gray-50 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <CiBookmark className="size-7" color="#000" />
              </button>

              <button
                type="button"
                className="w-full py-3 px-4 flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-gray-300 bg-[#D9EAFD] text-white hover:bg-gray-50 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                <SiMyanimelist className="size-7" color="#000" />
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
