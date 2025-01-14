import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { animeApi, useAnimeQuery } from "./apis/Anime";
import { userApi, useLoginMutation, useRegisterMutation } from "./apis/Users";

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
export { useAnimeQuery, useLoginMutation, useRegisterMutation };
