import { useState } from "react";
import {
	MdArrowCircleRight,
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
} from "react-icons/md";
import TitleDescription from "../../components/homepage/TitleDescription";
import { useGetTopAiringQuery } from "../../services";

function TopAnime() {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 18;
	const {
		data: items,
		isError,
		isLoading,
		isFetching,
	} = useGetTopAiringQuery({
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
		<div className="p-4 sm:p-6 bg-white">
			{/* Header Section */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-200">
				<div className="flex items-center gap-2">
					<div className="p-2 rounded-lg bg-blue-50">
						<MdArrowCircleRight className="size-5 text-blue-600" />
					</div>
					<h1 className="text-xl sm:text-2xl font-bold text-gray-900">
						Top Anime
					</h1>
					{/* {items?.pagination?.items?.total > 0 && ( */}
					{/* 	<span className="ml-2 px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"> */}
					{/* 		{items.pagination.items.total} */}
					{/* 	</span> */}
					{/* )} */}
				</div>

				{/* Pagination */}
				<nav className="flex items-center gap-1" aria-label="Pagination">
					<button
						type="button"
						disabled={currentPage === 1 || isFetching}
						className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
						aria-label="Previous page"
						onClick={handlePreviousPage}
					>
						<MdKeyboardArrowLeft className="size-5" />
					</button>

					<span className="flex h-9 min-w-[2.5rem] items-center justify-center rounded-lg bg-blue-50 px-3 text-sm font-semibold text-blue-600 border border-blue-200">
						{currentPage}
					</span>

					<button
						type="button"
						disabled={!items?.pagination?.has_next_page || isFetching}
						className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50"
						aria-label="Next page"
						onClick={handleNextPage}
					>
						<MdKeyboardArrowRight className="size-5" />
					</button>
				</nav>
			</div>

			{/* Content Grid - 3 cards max */}
			<div className="py-6">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{content}
				</div>
			</div>
		</div>
	);
}

export default TopAnime;
