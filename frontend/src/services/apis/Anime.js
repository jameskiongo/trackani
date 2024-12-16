import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: () => "top/anime?limit=5",
    }),
  }),
});
export const { useGetAnimeQuery } = animeApi;
export { animeApi };
