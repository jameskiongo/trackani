import { BsCcSquare } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function SearchResults({ anime }) {
	return (
		// SearchResults.jsx
		<div className="block hover:bg-gray-50 transition-colors">
			<Link
				to={`/anime/${anime.mal_id}`}
				className="flex items-center gap-4 p-4"
			>
				{/* Image */}
				<img
					src={anime.images.webp.image_url}
					alt={anime.title}
					className="w-14 h-20 object-cover rounded"
				/>

				{/* Info */}
				<div className="flex-1 min-w-0">
					<p className="text-base font-medium text-gray-900 line-clamp-1">
						{anime.title}
					</p>
					<div className="flex items-center gap-3 mt-1.5 text-sm text-gray-500">
						<span className="flex items-center gap-1">
							<IoIosStarOutline className="size-4 text-yellow-500" />
							{anime.score || "N/A"}
						</span>
						<span>•</span>
						<span>{anime.type || "Unknown"}</span>
						<span>•</span>
						<span>{anime.aired?.prop?.from?.year || "TBA"}</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default SearchResults;
