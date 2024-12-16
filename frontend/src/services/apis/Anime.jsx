import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: () => ({
        url: "https://api.jikan.moe/v4/seasons/now",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});
export const { useGetAnimeQuery } = animeApi;
export { animeApi };
