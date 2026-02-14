import { BsCcSquare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function ListTopAnime({ anime }) {
	return (
		<div className="group relative my-2 flex flex-row overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
			{/* Image Container with Gradient Overlay */}
			<div className="relative h-32 w-28 flex-shrink-0 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
				<img
					src={anime.images.webp.image_url}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
					alt={anime.title}
				/>
			</div>

			{/* Content */}
			<div className="flex w-full flex-col justify-center gap-y-2 bg-gradient-to-r from-white to-gray-50 px-4 py-3">
				<Link
					to={`/anime/${anime.mal_id}`}
					className="line-clamp-2 text-sm font-bold capitalize leading-tight text-gray-800 transition-colors hover:text-blue-600"
				>
					{anime.title}
				</Link>

				<div className="flex w-full flex-row items-center justify-between">
					<div className="flex flex-row flex-wrap items-center gap-2 text-xs">
						{/* Score Badge */}
						<div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">
							<IoIosStarOutline className="size-3 text-yellow-600" />
							<span className="font-semibold text-yellow-700">
								{anime.score || "N/A"}
							</span>
						</div>

						{/* Episodes Badge */}
						<div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1">
							<BsCcSquare className="size-3.5 text-blue-600" />
							<span className="font-medium text-blue-700">
								{anime.episodes || "?"} eps
							</span>
						</div>

						{/* Type Badge */}
						<div className="rounded-full bg-purple-50 px-2.5 py-1 font-medium text-purple-700">
							{anime.type || "Unknown"}
						</div>
					</div>

					{/* Bookmark Button with Animation */}
					<button className="rounded-full p-2 text-gray-400 transition-all hover:bg-gray-100 hover:text-blue-600 active:scale-95">
						<CiBookmark className="size-5" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ListTopAnime;
