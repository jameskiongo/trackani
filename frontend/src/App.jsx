import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AuthProvider from "./services/helper/AuthProvider";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import Register from "./pages/register/Register";
import AnimeDetails from "./pages/anime/AnimeDetails";
import TopAnime from "./pages/top/TopAnime";
import UpcomingAnime from "./pages/upcoming/UpcomingAnime";
import CurrentAiring from "./pages/current/CurrentAiring";
import GenresPage from "./pages/genres/GenresPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/genres" element={<GenresPage />} />
      <Route path="/top" element={<TopAnime />} />
      <Route path="/upcoming" element={<UpcomingAnime />} />
      <Route path="/current" element={<CurrentAiring />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/anime/:mal_id" element={<AnimeDetails />} />
    </Route>,
  ),
);
function App() {
  return (
    <>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
