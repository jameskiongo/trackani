import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: "anime",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    getTopAiring: builder.query({
      query: () => "top/anime?limit=5",
    }),
    getCurrentSeason: builder.query({
      query: () => "seasons/now",
    }),
  }),
});

export const { useGetTopAiringQuery, useGetCurrentSeasonQuery } = animeApi;
