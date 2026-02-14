import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { useGetSearchAnimeQuery } from "../../services";
import SearchResults from "../search/SearchResults";

function SearchBar() {
	const [term, setTerm] = useState("");
	const navigate = useNavigate();
	const debouncedQuery = useDebounce(term, 500); // Wait 500ms before fetching
	const [visible, setVisible] = useState(false);
	const itemsPerPage = 4;
	const { data, error, isLoading, isFetching } = useGetSearchAnimeQuery(
		{
			term: term,
			limit: itemsPerPage,
		},
		{
			skip: debouncedQuery.length < 3,
		},
	);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (term.length === 0) {
			return;
		}
		navigate(`/search?q=${term}`);
		setTerm("");
	};
	return (
		<div className="flex flex-col w-full lg:w-auto relative">
			{/* Search Input Container */}
			<div className="relative w-full lg:w-96">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none z-10">
					<CiSearch className="size-5 text-gray-400" />
				</div>
				<form onSubmit={handleSubmit}>
					<input
						value={term}
						onChange={(e) => {
							setTerm(e.target.value);
							setVisible(true);
						}}
						type="text"
						placeholder="Search anime..."
						className="w-full py-3 pl-10 pr-4 text-base bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-400"
					/>
				</form>
			</div>

			{/* Search Results Dropdown */}
			{visible && debouncedQuery && (
				<div className="absolute left-0 right-0 top-14 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50">
					{isLoading || isFetching ? (
						<div className="p-6 text-base text-gray-500 text-center">
							Searching...
						</div>
					) : error ? (
						<div className="p-6 text-base text-red-500 text-center">
							Error loading results
						</div>
					) : data?.data?.length > 0 ? (
						<div className="max-h-[480px] overflow-y-auto divide-y divide-gray-100">
							{data.data.map((anime) => (
								<SearchResults key={anime.mal_id} anime={anime} />
							))}
						</div>
					) : (
						<div className="p-8 text-base text-gray-500 text-center">
							No results found
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default SearchBar;
