import { CiBookmark } from "react-icons/ci";
import { SiMyanimelist } from "react-icons/si";
import { useParams } from "react-router-dom";
import YouTubeEmbed from "../../components/animedetails/YoutubePlayer";
import { useGetAnimeDetailsQuery } from "../../services";

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
		<div className="w-full bg-gray-50">
			{/* Banner Section */}
			<div className="relative w-full h-[400px]">
				<img
					src={
						data?.data?.trailer?.images?.maximum_image_url ||
						// FIX: change the banner image
						"https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=2070&auto=format&fit=crop"
					}
					alt={data?.data?.title_english + " banner"}
					className="w-full h-full object-cover object-center"
				/>
			</div>

			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col lg:flex-row gap-10 -mt-32 relative z-20">
					{/* LEFT SIDEBAR */}
					<div className="lg:w-1/4 w-full">
						<div className="bg-white shadow-xl rounded-2xl overflow-hidden">
							<img
								src={data?.data?.images?.webp?.large_image_url}
								alt={data?.data?.title_english + " poster"}
								className="w-full object-cover"
							/>

							{/* Action Buttons */}
							<div className="flex gap-3 p-4">
								<button className="flex-1 flex justify-center items-center py-3 rounded-xl bg-blue-100 hover:bg-blue-200 transition">
									<CiBookmark className="size-6 text-gray-800" />
								</button>
								<button className="flex-1 flex justify-center items-center py-3 rounded-xl bg-blue-100 hover:bg-blue-200 transition">
									<SiMyanimelist className="size-6 text-gray-800" />
								</button>
							</div>

							{/* Info Section */}
							<div className="border-t p-5 space-y-4 text-sm">
								<div>
									<h3 className="font-semibold text-gray-900">Premiered</h3>
									<p className="text-gray-600">{data?.data?.aired.string}</p>
								</div>

								<div>
									<h3 className="font-semibold text-gray-900">Genres</h3>
									<div className="flex flex-wrap gap-2 mt-1">
										{data?.data?.genres.map((genre) => (
											<span
												key={genre.mal_id}
												className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium"
											>
												{genre.name}
											</span>
										))}
									</div>
								</div>

								<div>
									<h3 className="font-semibold text-gray-900">Season</h3>
									<p className="text-gray-600 capitalize">
										{data?.data?.season}
									</p>
								</div>

								<div>
									<h3 className="font-semibold text-gray-900">Rating</h3>
									<p className="text-gray-600">{data?.data?.rating}</p>
								</div>

								<div>
									<h3 className="font-semibold text-gray-900">Studio</h3>
									<p className="text-gray-600">
										{data?.data?.studios[0]?.name || "N/A"}
									</p>
								</div>

								<div>
									<h3 className="font-semibold text-gray-900">Source</h3>
									<p className="text-gray-600">{data?.data?.source}</p>
								</div>

								<div>
									<h3 className="font-semibold text-gray-900">English Title</h3>
									<p className="text-gray-600">
										{data?.data?.title_english || "N/A"}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT CONTENT */}
					<div className="lg:w-3/4 w-full bg-white shadow-xl rounded-2xl p-8">
						<h1 className="text-3xl font-bold text-gray-900">
							{data?.data?.title}
						</h1>

						{/* Meta Info */}
						<div className="flex flex-wrap gap-3 mt-5">
							<span className="px-4 py-2 bg-blue-100 rounded-xl text-sm font-medium">
								{data?.data?.type || "N/A"}
							</span>
							<span className="px-4 py-2 bg-blue-100 rounded-xl text-sm font-medium">
								{data?.data?.episodes || "N/A"} Ep
							</span>
							<span className="px-4 py-2 bg-blue-100 rounded-xl text-sm font-medium">
								{data?.data?.year || "N/A"}
							</span>
							<span className="px-4 py-2 bg-blue-100 rounded-xl text-sm font-medium">
								⭐ {data?.data?.score || "N/A"}
							</span>
						</div>

						{/* Synopsis */}
						<div className="mt-8">
							<h2 className="text-xl font-semibold mb-3">Synopsis</h2>
							<p className="text-gray-700 leading-relaxed">
								{data?.data?.synopsis}
							</p>
						</div>

						{/* Trailer */}
						<div className="mt-8">
							<YouTubeEmbed videoId={data?.data?.trailer?.youtube_id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AnimeDetails;
