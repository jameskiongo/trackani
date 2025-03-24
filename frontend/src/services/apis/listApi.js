import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../helper/baseQueryWithReauth";

const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: () => ({
        url: "anime/",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAnimeQuery } = listApi;
export { listApi };
