// import axios from "axios";

export async function FetchTopAiring() {
  const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=5");
  const data = await response.json();
  return data;
}
