import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import TitleDescription from "../../components/homepage/TitleDescription";
import { useGenres } from "../../hooks/useGenres";
import { useGetFilteredAnimeQuery } from "../../services";
import { filterRating, filterStatus, filterType } from "./data";

function GenresPage() {
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [selectedStatus, setSelectedStatus] = useState(null);
	const [selectedType, setSelectedType] = useState(null);
	const [selectedRating, setSelectedRating] = useState(null);

	// Use the custom hook for genres
	const {
		options,
		isLoading: isGenresLoading,
		isFetching: isGenresFetching,
	} = useGenres();

	// Use the filtered anime query
	const {
		data,
		isError,
		isLoading: isFilterLoading,
		isFetching: isFilterFetching,
	} = useGetFilteredAnimeQuery({
		genres: selectedGenres,
		status: selectedStatus,
		type: selectedType,
		rating: selectedRating,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	let content;
	if (isFilterLoading || isFilterFetching) {
		content = <p>Loading...</p>;
	} else if (isError) {
		content = <p>Something went wrong</p>;
	} else if (!data.data || data.data.length === 0) {
		content = <p>No anime found.</p>;
	} else {
		content = data.data.map((anime) => {
			return <TitleDescription key={anime.mal_id} anime={anime} />;
		});
	}

	return (
		<div className="p-6 bg-white">
			<div>
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{/* Genres */}
						<div className="space-y-1.5">
							<h1 className="text-xs font-bold uppercase tracking-wide text-gray-500">
								Genres
							</h1>
							<Select
								options={options}
								isMulti
								isLoading={isGenresLoading || isGenresFetching}
								onChange={(selected) => {
									setSelectedGenres(selected.map((genre) => genre.value));
								}}
								placeholder={
									isGenresLoading || isGenresFetching
										? "Loading genres..."
										: "Select genres..."
								}
								className="basic-multi-select"
								classNamePrefix="select"
								theme={(theme) => ({
									...theme,
									borderRadius: 6,
									colors: {
										...theme.colors,
										primary: "#2563eb",
										primary25: "#eff6ff",
										primary50: "#dbeafe",
										neutral20: "#d1d5db",
										neutral30: "#9ca3af",
									},
								})}
							/>
						</div>

						{/* Status */}
						<div className="space-y-1.5">
							<h1 className="text-xs font-bold uppercase tracking-wide text-gray-500">
								Status
							</h1>
							<Select
								options={filterStatus}
								isLoading={isFilterLoading || isFilterFetching}
								onChange={(selected) =>
									setSelectedStatus(selected ? selected.value : null)
								}
								placeholder={
									isFilterLoading || isFilterFetching
										? "Loading status..."
										: "Select status..."
								}
								className="basic-multi-select"
								classNamePrefix="select"
								isClearable
								theme={(theme) => ({
									...theme,
									borderRadius: 6,
									colors: {
										...theme.colors,
										primary: "#2563eb",
										primary25: "#eff6ff",
										primary50: "#dbeafe",
										neutral20: "#d1d5db",
										neutral30: "#9ca3af",
									},
								})}
							/>
						</div>

						{/* Type */}
						<div className="space-y-1.5">
							<h1 className="text-xs font-bold uppercase tracking-wide text-gray-500">
								Type
							</h1>
							<Select
								options={filterType}
								isLoading={isFilterLoading || isFilterFetching}
								placeholder={
									isFilterLoading || isFilterFetching
										? "Loading types..."
										: "Select type..."
								}
								onChange={(selected) =>
									setSelectedType(selected ? selected.value : null)
								}
								className="basic-multi-select"
								classNamePrefix="select"
								isClearable
								theme={(theme) => ({
									...theme,
									borderRadius: 6,
									colors: {
										...theme.colors,
										primary: "#2563eb",
										primary25: "#eff6ff",
										primary50: "#dbeafe",
										neutral20: "#d1d5db",
										neutral30: "#9ca3af",
									},
								})}
							/>
						</div>

						{/* Rating */}
						<div className="space-y-1.5">
							<h1 className="text-xs font-bold uppercase tracking-wide text-gray-500">
								Rating
							</h1>
							<Select
								options={filterRating}
								isLoading={isFilterLoading || isFilterFetching}
								placeholder={
									isFilterLoading || isFilterFetching
										? "Loading rating..."
										: "Select rating..."
								}
								onChange={(selected) =>
									setSelectedRating(selected ? selected.value : null)
								}
								className="basic-multi-select"
								classNamePrefix="select"
								isClearable
								theme={(theme) => ({
									...theme,
									borderRadius: 6,
									colors: {
										...theme.colors,
										primary: "#2563eb",
										primary25: "#eff6ff",
										primary50: "#dbeafe",
										neutral20: "#d1d5db",
										neutral30: "#9ca3af",
									},
								})}
							/>
						</div>
					</div>
				</form>
			</div>

			{/* Content Grid - Alternative layouts */}
			<div className="py-6">
				{/* Option A: 3 columns on desktop */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{content}
				</div>

				{/* Option B: 2 columns with larger cards */}
				{/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
      {content}
    </div> */}

				{/* Option C: Masonry-like layout with auto-fit */}
				{/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {content}
    </div> */}
			</div>
		</div>
	);
}

export default GenresPage;
