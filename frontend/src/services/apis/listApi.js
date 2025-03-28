import { createApi } from "@reduxjs/toolkit/query/react";
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
      // Here we associate the fetched data with a tag, so it can be invalidated or updated later.
      providesTags: (result) => (result ? [{ type: "Anime", id: "LIST" }] : []), // The tag can be something like `Anime/LIST`, and it represents the list of animes.
    }),
    bookmarkAnime: builder.mutation({
      query: (data) => ({
        url: "anime/",
        method: "POST",
        body: data,
      }),
      // This invalidates the `Anime/LIST` tag to refetch the data after a mutation occurs
      invalidatesTags: [{ type: "Anime", id: "LIST" }],
    }),
  }),
});

export const { useGetAnimeQuery, useBookmarkAnimeMutation } = listApi;
export { listApi };
