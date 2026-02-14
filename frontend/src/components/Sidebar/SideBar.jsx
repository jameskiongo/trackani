import { CiBookmark } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LuTag } from "react-icons/lu";
import { TbCalendarClock } from "react-icons/tb";
import { Link } from "react-router-dom";

function SideBar() {
	return (
		<div className="hidden lg:block w-[80px] fixed left-0 top-[65px] h-[calc(100vh-65px)] bg-white border-r border-gray-200 shadow-sm overflow-hidden">
			<div className="flex flex-col items-center justify-start h-full py-4">
				{/* Home */}
				<div className="w-full px-1">
					<Link href="/">
						<div className="flex flex-col items-center justify-center py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 group cursor-pointer">
							<IoHomeOutline className="size-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
							<p className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors mt-1">
								Home
							</p>
						</div>
					</Link>
				</div>

				{/* My List */}
				<div className="w-full px-1 mt-1">
					<Link to="/list">
						<div className="flex flex-col items-center justify-center py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 group cursor-pointer">
							<CiBookmark className="size-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
							<span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors mt-1 text-center">
								My List
							</span>
						</div>
					</Link>
				</div>

				{/* Upcoming */}
				<div className="w-full px-1 mt-1">
					<Link to="/upcoming">
						<div className="flex flex-col items-center justify-center py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 group cursor-pointer">
							<TbCalendarClock className="size-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
							<span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors mt-1 text-center">
								Upcoming
							</span>
						</div>
					</Link>
				</div>

				{/* Genres */}
				<div className="w-full px-1 mt-1">
					<Link to="/genres">
						<div className="flex flex-col items-center justify-center py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 group cursor-pointer">
							<LuTag className="size-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
							<span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors mt-1 text-center">
								Genres
							</span>
						</div>
					</Link>
				</div>

				{/* Optional: Active state indicator - add class "active" to current page */}
				{/* <div className="absolute left-0 w-1 h-8 bg-blue-600 rounded-r-full" /> */}
			</div>
		</div>
	);
}

export default SideBar;
