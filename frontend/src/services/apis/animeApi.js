import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
	reducerPath: "anime",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
	endpoints: (builder) => ({
		getTopAiring: builder.query({
			query: ({ page = 1, limit = 5 }) =>
				`top/anime?limit=${limit}&page=${page}`,
		}),
		getAnimeDetails: builder.query({
			query: (mal_id) => `anime/${mal_id}/full`,
		}),
		getCurrentSeason: builder.query({
			// query: () => "seasons/now",
			query: ({ page = 1, limit = 5 }) =>
				`seasons/now?limit=${limit}&page=${page}`,
		}),
		getUpcomingSeason: builder.query({
			query: ({ page = 1, limit = 5 }) =>
				`seasons/upcoming?limit=${limit}&page=${page}`,
		}),
		getSearchAnime: builder.query({
			query: ({ term }) => `anime?q=${term}`,
		}),
		getAllGenresAnime: builder.query({
			query: () => `genres/anime`,
		}),
		getFilteredAnime: builder.query({
			query: (filters) => {
				const params = new URLSearchParams();
				if (filters.genres) params.append("genres", filters.genres.join(",")); // Genres is an array
				if (filters.status) params.append("status", filters.status); // Status is a single value
				if (filters.type) params.append("type", filters.type); // Type is a single value
				if (filters.rating) params.append("rating", filters.rating); // Rating is a single value

				return `anime?${params.toString()}`;
			},
		}),
	}),
});

export const {
	useGetTopAiringQuery,
	useGetAnimeDetailsQuery,
	useGetCurrentSeasonQuery,
	useGetUpcomingSeasonQuery,
	useGetSearchAnimeQuery,
	useGetAllGenresAnimeQuery,
	useGetFilteredAnimeQuery,
} = animeApi;
