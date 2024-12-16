import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div className="flex">
        <div className="hidden lg:block w-[80px] shadow-md sticky overflow-hidden top-[65px] left-0 h-[calc(100vh-65px)]">
          <SideBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
