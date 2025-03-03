import TitleDescription from "../../components/homepage/TitleDescription";
function ListAnime() {
  return (
    <div className="p-4 z-30">
      <div className="py-2">
        <div className="flex flex-row items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <defs>
              <mask id="ipSRightC0">
                <g fill="none" strokeLinejoin="round" strokeWidth="4">
                  <path
                    fill="#fff"
                    stroke="#fff"
                    d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                  />
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    d="m21 33l9-9l-9-9"
                  />
                </g>
              </mask>
            </defs>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipSRightC0)"
            />
          </svg>
          <h1 className="uppercase font-bold px-1">Currently Airing</h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 h-40">
        <TitleDescription />
        <TitleDescription />
        <TitleDescription />
      </div>
    </div>
  );
}

export default ListAnime;
