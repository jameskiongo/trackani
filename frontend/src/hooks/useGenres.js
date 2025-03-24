import { useGetAllGenresAnimeQuery } from "../services";
export const useGenres = () => {
  const { data, isError, isLoading, isFetching } = useGetAllGenresAnimeQuery();
  const options =
    data?.data.map((genre) => ({
      value: genre.mal_id,
      label: genre.name,
    })) || [];

  return { options, isError, isLoading, isFetching };
};
