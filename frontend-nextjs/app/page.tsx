import { Suspense } from "react";
import { getCurrentSeason } from "@/services/api/anime";
import ListAnime from "./ui/ListAnime";

export default function Home() {
	// const animes = fetch("https://api.jikan.moe/v4/");
	// const data = getCurrentSeason();
	return (
		<Suspense fallback={<div>Loading ...</div>}>
			<ListAnime anime={data} />
		</Suspense>
	);
}
