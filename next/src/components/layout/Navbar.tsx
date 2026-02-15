export default function Navbar() {
  return (
    <div>
      <div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm h-[65px]">
        <header className="flex h-full items-center justify-center">
          <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="inline-block text-2xl md:text-3xl font-black uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors font-galada"
                aria-label="Trackani Home"
              >
                Trackani
              </a>
            </div>

            {/* Search - Desktop */}
            <div className="hidden md:block flex-1 max-w-md mx-auto px-4">
              {/* SearchBar component will go here */}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              {/* Auth buttons will go here */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                id="hs-navbar-hcail-collapse"
                aria-label="Toggle navigation"
              >
                {/* Icon will go here */}
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile Menu */}
        <div
          id="hs-navbar-hcail"
          className="absolute left-0 right-0 top-[65px] bg-white border-b border-gray-200 shadow-lg p-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {/* SearchBar will go here */}
            <div className="flex flex-col gap-2">
              {/* Mobile auth buttons will go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
