import TopAiringAnime from "../../components/Topanime/TopAiringAnime";
import ListAnime from "./ListAnime";

function HomePage() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-9/12 bg-white md:h-screen h-fit">
        {/* TODO: Finish up on Filter options */}
        {/* <FilterOptions /> */}
        <ListAnime />
      </div>
      <div className="w-full lg:w-3/12 bg-offwhite rounded-sm">
        <TopAiringAnime />
      </div>
    </div>
  );
}

export default HomePage;
