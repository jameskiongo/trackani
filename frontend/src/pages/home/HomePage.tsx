import RandomAnime from "../../components/Random/RandomAnime";
import FilterOptions from "./FilterOptions";
import ListAnime from "./ListAnime";

function HomePage() {
  return (
    <div className="w-full mt-[65px] z-10">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-4/5 bg-gray-400 md:h-screen h-fit">
          <FilterOptions />
          <ListAnime />
        </div>
        <div className="w-full lg:w-1/5 bg-blue-400">
          <RandomAnime />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
