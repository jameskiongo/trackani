import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { listApi } from "./apis/listApi";
import { userApi, useLoginMutation, useRegisterMutation } from "./apis/Users";
import {
  useGetFilteredAnimeQuery,
  useGetSearchAnimeQuery,
  animeApi,
  useGetCurrentSeasonQuery,
  useGetUpcomingSeasonQuery,
  useGetAnimeDetailsQuery,
  useGetTopAiringQuery,
  useGetAllGenresAnimeQuery,
} from "./apis/animeApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
    [listApi.reducerPath]: listApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(animeApi.middleware)
      .concat(listApi.middleware),
});
setupListeners(store.dispatch);
export {
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentSeasonQuery,
  useGetTopAiringQuery,
  useGetAnimeDetailsQuery,
  useGetUpcomingSeasonQuery,
  useGetSearchAnimeQuery,
  useGetAllGenresAnimeQuery,
  useGetFilteredAnimeQuery,
};
