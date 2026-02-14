import { BsCcSquare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";

function TitleDescription({ anime }) {
	return (
		<div className="group flex flex-row overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
			{/* Image with scale animation */}
			<div className="w-2/5 overflow-hidden">
				<img
					src={anime.images.webp.large_image_url}
					className="h-72 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
					alt={anime.title}
				/>
			</div>

			{/* Content */}
			<div className="flex w-3/5 flex-col bg-gradient-to-br from-white to-gray-50/50 p-6">
				{/* Bookmark */}
				<div className="flex justify-end">
					<button
						type="button"
						className="rounded-lg p-2 text-gray-400 transition-all hover:bg-gray-100 hover:text-blue-600"
					>
						<CiBookmark className="size-6" />
					</button>
				</div>

				{/* Title & Synopsis */}
				<div className="mt-2 space-y-3">
					<Link to={`/anime/${anime.mal_id}`}>
						<h1 className="line-clamp-2 text-xl font-black leading-tight text-gray-900 transition-colors hover:text-blue-600">
							{anime.title}
						</h1>
					</Link>

					<p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
						{anime.synopsis || "No synopsis available."}
					</p>
				</div>

				{/* Stats */}
				<div className="mt-4 flex items-center gap-4">
					<span className="flex items-center gap-1.5 text-sm">
						<IoIosStarOutline className="size-4 text-yellow-500" />
						<span className="font-medium text-gray-700">
							{anime.score || "N/A"}
						</span>
					</span>
					<span className="flex items-center gap-1.5 text-sm">
						<BsCcSquare className="size-4 text-gray-500" />
						<span className="font-medium text-gray-700">
							{anime.episodes || "?"} eps
						</span>
					</span>
					{anime.type && (
						<span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
							{anime.type}
						</span>
					)}
				</div>

				{/* Genres */}
				{anime.genres?.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-2">
						{anime.genres.map((genre) => (
							<span
								key={genre.mal_id}
								className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
							>
								{genre.name}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default TitleDescription;
