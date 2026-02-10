export default function Home() {
	return (
		<div className="w-full flex flex-col lg:flex-row min-h-screen">
			<div className="w-full lg:w-9/12 bg-white  size-full">
				{/* <ListAnime /> */}
				ListAnime
			</div>

			<div className="w-full lg:w-3/12 bg-offwhite rounded-sm size-full">
				{/* <TopAiringAnime /> */}
				Top Airing
			</div>
		</div>
	);
}
