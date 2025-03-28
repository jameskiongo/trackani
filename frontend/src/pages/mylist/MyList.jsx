import TitleDescription from "../../components/homepage/TitleDescription";
import { useGetAnimeQuery } from "../../services";
import MyListAnime from "./MyListAnime";
function MyList() {
  const { data, error, isLoading } = useGetAnimeQuery();
  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Something went wrong</div>;
  } else if (!data || data.length === 0) {
    content = <div>No data</div>;
  } else {
    content = data.map((anime) => (
      <MyListAnime key={anime.mal_id} anime={anime} />
    ));
  }

  return (
    <div className="p-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-40">
        {content}
      </div>
    </div>
  );
}

export default MyList;
