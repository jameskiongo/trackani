import { Link } from "react-router-dom";

function SideBar() {
  return (
    // <div className="hidden lg:block w-[80px] shadow-md sticky overflow-hidden top-[65px] left-0 h-[calc(100vh-65px)]">
    <div className="flex bg-offwhite flex-col justify-center items-center h-full">
      <div className="w-full">
        <a href="">
          <div className="flex flex-col py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-9"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z"
              />
            </svg>
            <a href="/" className="text-sm">
              Home
            </a>
          </div>
        </a>
      </div>
      <div className="w-full">
        <a href="">
          <div className="flex flex-col py-2 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-9"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"
              />
            </svg>
            <a href="#" className="text-sm text-center capitalize">
              {/* Watch list */}
              my list
            </a>
          </div>
        </a>
      </div>
      <div className="w-full">
        <Link to="/upcoming">
          <div className="flex flex-col py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-9"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="M20.5 13.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0" />
                <path d="M12 19a5.5 5.5 0 1 1 0-11m1.5-4.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-1.5 10L15 9" />
              </g>
            </svg>
            <span className="text-sm capitalize text-center">
              {/* next up */}
              upcoming
            </span>
          </div>
        </Link>
      </div>
      <div className="w-full">
        <a href="">
          <div className="flex flex-col py-2 hover:bg-gray-300 cursor-pointer w-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-9"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.62 21.12a3 3 0 0 1-4.24 0L3.05 13C2.45 12.45 2 11.63 2 10.75V6a3 3 0 0 1 3-3h4.75c.88 0 1.7.45 2.25 1.05l8.07 8.38a3 3 0 0 1 0 4.24zm-.71-.71l4.45-4.45c.78-.78.78-2.05 0-2.83l-8.25-8.55C10.78 4.2 10.3 4 9.75 4l-4.78-.03C3.87 3.97 3 4.9 3 6v4.75c0 .55.2 1.03.58 1.36l8.5 8.3c.78.78 2.05.78 2.83 0M6.5 5A2.5 2.5 0 0 1 9 7.5A2.5 2.5 0 0 1 6.5 10A2.5 2.5 0 0 1 4 7.5A2.5 2.5 0 0 1 6.5 5m0 1A1.5 1.5 0 0 0 5 7.5A1.5 1.5 0 0 0 6.5 9A1.5 1.5 0 0 0 8 7.5A1.5 1.5 0 0 0 6.5 6"
              />
            </svg>
            <a href="#" className="text-sm text-center capitalize">
              tags
            </a>
          </div>
        </a>
      </div>
    </div>
    // {/* </div> */}
  );
}

export default SideBar;
