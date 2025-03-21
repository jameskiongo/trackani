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
  }),
});

export const {
  useGetTopAiringQuery,
  useGetAnimeDetailsQuery,
  useGetCurrentSeasonQuery,
  useGetUpcomingSeasonQuery,
  useGetSearchAnimeQuery,
  useGetAllGenresAnimeQuery,
} = animeApi;
