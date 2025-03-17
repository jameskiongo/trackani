import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi, useLoginMutation, useRegisterMutation } from "./apis/Users";
import {
  useGetSearchAnimeQuery,
  animeApi,
  useGetCurrentSeasonQuery,
  useGetUpcomingSeasonQuery,
  useGetAnimeDetailsQuery,
  useGetTopAiringQuery,
} from "./apis/animeApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(animeApi.middleware),
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
};
