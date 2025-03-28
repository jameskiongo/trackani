import { Link } from "react-router-dom";
import { LuTag } from "react-icons/lu";
import { TbCalendarClock } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

function SideBar() {
  return (
    // <div className="hidden lg:block w-[80px] shadow-md sticky overflow-hidden top-[65px] left-0 h-[calc(100vh-65px)]">
    <div className="flex bg-offwhite flex-col justify-center items-center h-full">
      <div className="w-full">
        <a href="/">
          <div className="flex flex-col py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
            <IoHomeOutline className="size-7" />
            <span href="/" className="text-sm">
              Home
            </span>
          </div>
        </a>
      </div>
      <div className="w-full">
        <Link to="/list">
          <div className="flex flex-col py-2 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
            <CiBookmark className="size-7" />
            <span className="text-sm text-center capitalize">
              {/* Watch list */}
              my list
            </span>
          </div>
        </Link>
      </div>
      <div className="w-full">
        <Link to="/upcoming">
          <div className="flex flex-col py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
            <TbCalendarClock className="size-7" />
            <span className="text-sm capitalize text-center">
              {/* next up */}
              upcoming
            </span>
          </div>
        </Link>
      </div>
      <div className="w-full">
        <Link to="/genres">
          <div className="flex flex-col py-2 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
            <LuTag className="size-7" />
            <span className="text-sm text-center capitalize">genres</span>
          </div>
        </Link>
      </div>
    </div>
    // {/* </div> */}
  );
}

export default SideBar;
