import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jikan.moe/v4/",
  }),
  endpoints: (builder) => ({
    anime: builder.query({
      query: () => ({
        url: "top/anime",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});
export const { useAnimeQuery } = animeApi;
export { animeApi };
