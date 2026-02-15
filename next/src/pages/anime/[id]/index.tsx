import { useRouter } from "next/router";
import { BiCalendar } from "react-icons/bi";
import { BsCcSquare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { GiCalendarHalfYear } from "react-icons/gi";
import { IoIosStarOutline } from "react-icons/io";
import { PiTelevision } from "react-icons/pi";
import { SiMyanimelist } from "react-icons/si";
import useSWR from "swr";
import YouTubeEmbed from "@/components/homepage/YoutubePlayer";

// import { ErrorState } from "@/components/ui/ErrorState";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface AnimeDetailsData {
  data: {
    mal_id: number;
    title: string;
    title_english?: string;
    images: {
      webp: {
        large_image_url: string;
      };
    };
    trailer?: {
      youtube_id?: string;
      embed_url?: string; // Add this
      images?: {
        maximum_image_url?: string;
      };
    };
    synopsis: string;
    type?: string;
    episodes?: number;
    year?: number;
    score?: number;
    aired: {
      string: string;
    };
    genres: Array<{
      mal_id: number;
      name: string;
    }>;
    season?: string;
    rating?: string;
    studios: Array<{
      name: string;
    }>;
    source?: string;
  };
}

export default function AnimeDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR<AnimeDetailsData>(
    id ? `/api/anime/${id}` : null,
    fetcher,
  );

  if (isLoading) {
    return (
      <div className="w-full bg-white min-h-screen flex items-center justify-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-white min-h-screen flex items-center justify-center">
        <p>Something went wrong</p>
      </div>
    );
  }

  if (!data?.data) {
    return (
      <div className="w-full bg-white min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No anime data found</p>
      </div>
    );
  }

  const anime = data.data;

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDEBAR */}
          <div className="lg:w-1/4 w-full">
            <div className="sticky top-24 space-y-6">
              {/* Poster Card */}
              <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={anime.images.webp.large_image_url}
                  alt={
                    anime.title_english
                      ? `${anime.title_english} poster`
                      : `${anime.title} poster`
                  }
                  className="w-full object-cover"
                />

                {/* Floating Bookmark Button */}
                <button
                  type="button"
                  className="absolute top-2 right-2 z-20 rounded-full bg-white/90 p-1.5 text-gray-600 shadow-md transition-all duration-300 opacity-100 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-blue-500 hover:text-white active:scale-90 backdrop-blur-[2px]"
                >
                  <CiBookmark className="size-6" />
                </button>

                {/* Bottom Button Row */}
                <div className="flex gap-3 p-4 bg-gray-50">
                  <button
                    type="button"
                    className="flex-1 flex justify-center items-center py-3 rounded-xl bg-white shadow-sm hover:shadow-md transition"
                  >
                    <SiMyanimelist className="size-6 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 space-y-5 text-sm">
                <div>
                  <h3 className="text-gray-500 font-medium">Premiered</h3>
                  <p className="text-gray-900 font-semibold mt-1">
                    {anime.aired.string}
                  </p>
                </div>

                {anime.genres?.length > 0 && (
                  <div>
                    <h3 className="text-gray-500 font-medium">Genres</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {anime.genres.map((genre) => (
                        <span
                          key={genre.mal_id}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {anime.season && (
                  <div>
                    <h3 className="text-gray-500 font-medium">Season</h3>
                    <p className="text-gray-900 font-semibold capitalize mt-1">
                      {anime.season}
                    </p>
                  </div>
                )}

                {anime.rating && (
                  <div>
                    <h3 className="text-gray-500 font-medium">Rating</h3>
                    <p className="text-gray-900 font-semibold mt-1">
                      {anime.rating}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="text-gray-500 font-medium">Studio</h3>
                  <p className="text-gray-900 font-semibold mt-1">
                    {anime.studios[0]?.name || "N/A"}
                  </p>
                </div>

                {anime.source && (
                  <div>
                    <h3 className="text-gray-500 font-medium">Source</h3>
                    <p className="text-gray-900 font-semibold mt-1">
                      {anime.source}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="text-gray-500 font-medium">English Title</h3>
                  <p className="text-gray-900 font-semibold mt-1">
                    {anime.title_english || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4 w-full bg-white rounded-3xl shadow-lg p-10">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {anime.title}
            </h1>

            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">
                <IoIosStarOutline className="size-4 text-yellow-600" />
                <span className="font-normal text-sm">
                  {anime.score || "N/A"}
                </span>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1">
                <BsCcSquare className="size-4 text-blue-600" />
                <span className="font-normal text-sm">
                  {anime.episodes || "N/A"} ep
                </span>
              </div>
              {/* <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-semibold"> */}
              {/*   {anime.type || "N/A"} */}
              {/* </span> */}

              <div className="flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1">
                <PiTelevision className="size-4 text-purple-600" />
                <span className="font-normal text-sm">
                  {anime.type || "N/A"}
                </span>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1">
                <BiCalendar className="size-4 text-green-600" />
                <span className="font-normal text-sm">
                  {anime.year || "N/A"}
                </span>
              </div>
            </div>

            {anime.synopsis && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {anime.synopsis}
                </p>
              </div>
            )}

            {(anime.trailer?.youtube_id || anime.trailer?.embed_url) && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
                <YouTubeEmbed
                  videoId={anime.trailer.youtube_id}
                  embedUrl={anime.trailer.embed_url}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
