interface Genres {
	mal_id: number;
	name: string;
}
interface AnimeImages {
	url: {
		webp: {
			large_image_url: string;
		};
	};
}
export interface Anime {
	mal_id: number;
	title: string;
	synopsis: string;
	score: number | null;
	episodes: number | null;
	type: string;
	genres: Genres[];
	images: AnimeImages;
}
export interface ListAnimeResponse {
	anime: Anime;
}
