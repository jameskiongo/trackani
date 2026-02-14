import type { Anime } from "@/types/anime";

export async function getCurrentSeason(): Promise<Anime[]> {
	const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=5&page=1`);
	if (!data.ok) {
		throw new Error("Failed to fetch");
	}
	const res = await data.json();
	return res.data.map((item: Anime) => ({
		mal_id: item.mal_id,
		title: item.title,
		synopsis: item.synopsis,
		score: item.score,
		episode: item.episodes,
		type: item.type,
		genres: item.genres,
		images: item.images,
	}));
}
