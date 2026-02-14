// "use client";
import { use } from "react";
import type { Anime } from "@/types/anime";

interface ListAnimeProp {
	anime: Promise<Anime[]>;
}

export default async function ListAnime({ anime }: ListAnimeProp) {
	const animes = use(anime);
	console.log(animes);
	return <>hello</>;
}
