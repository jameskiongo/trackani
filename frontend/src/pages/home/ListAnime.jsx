import { useState } from "react";
import {
	MdArrowCircleRight,
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import TitleDescription from "../../components/homepage/TitleDescription";
import { useGetCurrentSeasonQuery } from "../../services";

function ListAnime() {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;
	const {
		data: items,
		isError,
		isLoading,
		isFetching,
	} = useGetCurrentSeasonQuery({
		page: currentPage,
		limit: itemsPerPage,
	});

	const handleNextPage = () => {
		setCurrentPage((prev) => prev + 1);
	};
	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};
	let content;

	if (isLoading || isFetching) {
		content = <p>Loading...</p>;
	} else if (isError) {
		content = <p>Something went wrong</p>;
	} else if (!items.data || items.data.length === 0) {
		content = <p>No anime found.</p>;
	} else {
		content = items.data.map((anime) => {
			return <TitleDescription key={anime.mal_id} anime={anime} />;
		});
	}
	return (
		<div className="p-4 space-y-4">
			{/* Header Section */}
			<div className="flex flex-row items-center justify-between border-b border-gray-200 pb-3">
				<div className="flex flex-row items-center justify-start gap-2">
					<div className="rounded-full bg-blue-50 p-1.5">
						<MdArrowCircleRight className="size-5 text-blue-600" />
					</div>
					<Link to="/current" className="group">
						<h1 className="text-lg font-bold uppercase tracking-wide text-gray-800 transition-colors group-hover:text-blue-600">
							Currently Airing
						</h1>
					</Link>
				</div>

				{/* Pagination */}
				<nav className="flex items-center gap-1" aria-label="Pagination">
					<button
						type="button"
						disabled={currentPage === 1 || isFetching}
						className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
						aria-label="Previous page"
						onClick={handlePreviousPage}
					>
						<MdKeyboardArrowLeft className="size-5" />
					</button>

					<span className="flex h-9 min-w-[2.5rem] items-center justify-center rounded-lg bg-blue-50 px-3 text-sm font-semibold text-blue-600">
						{currentPage}
					</span>

					<button
						type="button"
						disabled={!items?.pagination?.has_next_page || isFetching}
						className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
						aria-label="Next page"
						onClick={handleNextPage}
					>
						<MdKeyboardArrowRight className="size-5" />
					</button>
				</nav>
			</div>

			{/* Content Grid */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">{content}</div>
		</div>
	);
}

export default ListAnime;
