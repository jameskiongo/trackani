import RandomAnime from "../../components/Random/RandomAnime";
import FilterOptions from "./FilterOptions";
import ListAnime from "./ListAnime";

function HomePage() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-row">
        <div className="w-4/5 bg-gray-400 h-screen">
          <FilterOptions />
          <ListAnime />
        </div>
        <div className="w-1/5 bg-blue-400">
          <RandomAnime />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
