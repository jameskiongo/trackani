"use client";
function SideBar() {
	return (
		// <div className="hidden lg:block w-[80px] shadow-md sticky overflow-hidden top-[65px] left-0 h-[calc(100vh-65px)]">
		<div className="flex bg-offwhite flex-col justify-center items-center h-full">
			<div className="w-full">
				<span>
					<div className="flex flex-col py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
						{/* <IoHomeOutline className="size-7" /> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
						<a href="/" className="text-sm">
							Home
						</a>
					</div>
				</span>
			</div>
			<div className="w-full">
				<a href="/">
					<div className="flex flex-col py-2 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
							/>
						</svg>
						<span className="text-sm text-center capitalize">
							{/* Watch list */}
							my list
						</span>
					</div>
				</a>
			</div>
			<div className="w-full">
				<a href="/">
					<div className="flex flex-col py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
							/>
						</svg>
						<span className="text-sm capitalize text-center">upcoming</span>
					</div>
				</a>
			</div>
			<div className="w-full">
				<a href="/">
					<div className="flex flex-col py-2 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 6h.008v.008H6V6Z"
							/>
						</svg>
						<span className="text-sm text-center capitalize">genres</span>
					</div>
				</a>
			</div>
		</div>
		// {/* </div> */}
	);
}
export default SideBar;
