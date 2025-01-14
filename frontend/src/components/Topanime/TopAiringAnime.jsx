import ListTopAnime from "./ListTopAnime";
import { useEffect, useState } from "react";
import { FetchTopAiring } from "../../_apis/queries/FetchTopAiring";
function TopAiringAnime() {
  const [items, setItems] = useState({
    data: [],
    loading: true,
    error: null,
  });
  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const data = await FetchTopAiring();
        setItems({
          animeList: data.data, // Assuming the API response contains a `data` field
          loading: false,
        });
      } catch (error) {
        setItems({
          animeList: [],
          loading: false,
          error: "An error occurred",
        });
      }
    };

    fetchData(); // Call the function
  }, []);
  let content;
  if (items.loading) {
    content = <p>Loading...</p>;
  } else if (items.error) {
    content = <p>{items.error}</p>;
  } else {
    content = items.animeList.map((anime) => {
      return <ListTopAnime key={anime.id} anime={anime} />;
    });
  }
  return (
    <>
      <div className="p-4">
        <div className="py-2">
          <div className="flex flex-row items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <defs>
                <mask id="ipSRightC0">
                  <g fill="none" strokeLinejoin="round" strokeWidth="4">
                    <path
                      fill="#fff"
                      stroke="#fff"
                      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                    />
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      d="m21 33l9-9l-9-9"
                    />
                  </g>
                </mask>
              </defs>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSRightC0)"
              />
            </svg>
            <h1 className="uppercase font-bold px-1">Top Anime</h1>
          </div>
        </div>
        {content}
        <div className="flex flex-row items-center py-2">
          <a
            className="flex flex-row items-center capitalize font-bold"
            href="#"
          >
            <p className="capitalize font-bold">View More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-7"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m10.207 8l-3.854 3.854l-.707-.707L8.793 8L5.646 4.854l.707-.708z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default TopAiringAnime;
