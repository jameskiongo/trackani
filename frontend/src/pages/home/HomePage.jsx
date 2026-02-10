import TopAiringAnime from "../../components/Topanime/TopAiringAnime";
import ListAnime from "./ListAnime";

function HomePage() {
	return (
		<div className="w-full flex flex-col lg:flex-row min-h-screen">
			{/* ListAnime section - always on top in mobile, left in desktop */}
			<div className="w-full lg:w-9/12 bg-white  size-full">
				{/* TODO: Finish up on Filter options */}
				{/* <FilterOptions /> */}
				<ListAnime />
			</div>

			{/* TopAiringAnime section - should be at the bottom in mobile, right in desktop */}
			<div className="w-full lg:w-3/12 bg-offwhite rounded-sm size-full">
				<TopAiringAnime />
			</div>
		</div>
	);
}

export default HomePage;
