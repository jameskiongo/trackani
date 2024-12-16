function SearchBar() {
  return (
    <>
      <div className="relative bg-offwhite lg:w-3/4">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
          <svg
            className="shrink-0 size-4 text-black "
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
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          className="py-2 ps-10 pe-4 block w-full border-gray-500 placeholder-black rounded-lg text-sm focus:border-blue-500 focus:ring-blue-50 disabled:opacity-50 disabled:pointer-events-none "
          type="text"
          placeholder="Search Anime"
        />
      </div>
    </>
  );
}

export default SearchBar;
