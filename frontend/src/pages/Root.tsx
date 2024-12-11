import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div>
      <div className="bg-black h-[60px] sticky top-0">
        <NavBar />
      </div>
      <div className="flex flex-1 top-10">
        <div className="w-[72px] sticky overflow-hidden top-[60px] left-0 h-[calc(100vh-60px)] bg-red-500">
          <SideBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
