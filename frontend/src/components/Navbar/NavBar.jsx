import { HiBars3 } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/utils/AuthProvider";
import SearchBar from "./SearchBar";

function NavBar() {
	const navigate = useNavigate();
	const { authenticated, logout } = useAuth(); // Add logout function from useAuth
	const authTokens = localStorage.getItem("accessToken");

	const handleLogout = () => {
		logout(); // Call the logout function
		localStorage.removeItem("accessToken"); // Remove the access token from local storage
		navigate("/login"); // Redirect to the login page
	};

	return (
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
						<SearchBar />
					</div>

					{/* Desktop Auth Buttons */}
					<div className="hidden md:flex items-center gap-2">
						{!authTokens ? (
							<>
								<a
									href="/login"
									className="px-4 py-2 text-sm font-medium text-gray-700 uppercase rounded-lg border border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
								>
									Login
								</a>
								<a
									href="/register"
									className="px-4 py-2 text-sm font-medium text-white uppercase rounded-lg bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all"
								>
									Register
								</a>
							</>
						) : (
							<button
								onClick={handleLogout}
								className="px-4 py-2 text-sm font-medium text-gray-700 uppercase rounded-lg border border-gray-300 hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all"
							>
								Logout
							</button>
						)}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							type="button"
							className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
							id="hs-navbar-hcail-collapse"
							aria-label="Toggle navigation"
						>
							<HiBars3 className="size-5" />
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
					<SearchBar />
					<div className="flex flex-col gap-2">
						{!authTokens ? (
							<>
								<a
									href="/login"
									className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 uppercase rounded-lg border border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 text-center transition-all"
								>
									Login
								</a>
								<a
									href="/register"
									className="w-full px-4 py-2.5 text-sm font-medium text-white uppercase rounded-lg bg-blue-600 hover:bg-blue-700 text-center transition-all"
								>
									Register
								</a>
							</>
						) : (
							<button
								onClick={handleLogout}
								className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 uppercase rounded-lg border border-gray-300 hover:border-red-500 hover:text-red-600 hover:bg-red-50 text-center transition-all"
							>
								Logout
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
