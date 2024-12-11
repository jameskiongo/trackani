import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="p-2 shadow-sm h-[65px] sticky top-0">
      <header className="flex flex-wrap md:justify-center md:flex-nowrap z-50 w-full">
        <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center justify-center px-0 mx-auto">
          <div className="md:col-span-3  items-center">
            <a
              className=" text-center pt-2 uppercase tracking-widest rounded-xl text-3xl inline-block font-galada focus:outline-none focus:opacity-80"
              href=""
              aria-label="Preline"
            >
              Trackani
            </a>
          </div>

          <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <button
              type="button"
              className="border border-gray-500 rounded-md py-2 px-3 md:inline-block hidden text-sm text-black uppercase hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600"
            >
              Login
            </button>
            <button
              type="button"
              className="border border-gray-500 rounded-md md:inline-block hidden py-2 px-3 text-sm uppercase text-black hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600"
            >
              Register
            </button>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-navbar-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-hcail"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="hs-navbar-hcail"
            className="hs-collapse hidden overflow-hidden bg-white border-none sm:border sm:border-gray-500 lg:p-0 p-4 transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 z-50 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-0 md:mt-0">
              <SearchBar />
            </div>
            <div className="md:hidden flex py-3 gap-x-3 flex-row">
              <button className="w-full border border-gray-500 rounded-md py-2 px-3 lg:hidden inline-block text-sm text-black uppercase hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600">
                login
              </button>
              <button className="w-full border border-gray-500 rounded-md py-2 px-3 lg:hidden inline-block text-sm text-black uppercase hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600">
                Register
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
