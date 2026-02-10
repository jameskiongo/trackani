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
		<div className="p-2 shadow-sm h-[65px] z-50 w-full fixed bg-offwhite top-0">
			<header className="flex flex-wrap md:justify-center md:flex-nowrap z-50 w-full">
				<nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center justify-center px-0 mx-auto">
					<div className="md:col-span-3 items-center">
						<a
							className="text-center pt-2 uppercase tracking-widest rounded-xl text-3xl inline-block font-galada focus:outline-none focus:opacity-80"
							href="/"
							aria-label="Preline"
						>
							Trackani
						</a>
					</div>

					<div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
						{/* Show Login and Register if not authenticated, otherwise show Logout */}
						{!authTokens ? (
							<>
								<a
									href="/login"
									type="button"
									className="border border-gray-500 rounded-md py-2 px-3 md:inline-block hidden text-sm text-black uppercase hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600"
								>
									Login
								</a>
								<a
									href="/register"
									type="button"
									className="border border-gray-500 rounded-md md:inline-block hidden py-2 px-3 text-sm uppercase text-black hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600"
								>
									Register
								</a>
							</>
						) : (
							<button
								onClick={handleLogout}
								type="button"
								className="border border-gray-500 rounded-md py-2 px-3 md:inline-block hidden text-sm text-black uppercase hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600"
							>
								Logout
							</button>
						)}

						{/* Mobile Menu Toggle Button */}
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
								<HiBars3 className="hs-collapse-open:hidden shrink-0 size-4" />
								<IoIosClose className="hs-collapse-open:block hidden shrink-0 size-4" />
							</button>
						</div>
					</div>

					{/* Mobile Menu Content */}
					<div
						id="hs-navbar-hcail"
						className="hs-collapse hidden overflow-hidden w-full bg-offwhite border-none sm:border sm:border-gray-500 md:p-0 p-4 transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
						aria-labelledby="hs-navbar-hcail-collapse"
					>
						<div className="flex w-full flex-col gap-y-4 gap-x-0 z-50 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-0 md:mt-0">
							<SearchBar />
						</div>
						<div className="md:hidden flex py-3 gap-x-3 flex-row">
							{/* Show Login and Register if not authenticated, otherwise show Logout */}
							{!authTokens ? (
								<>
									<a
										href="/login"
										className="w-full border border-gray-500 rounded-md py-2 px-3 lg:hidden inline-block text-sm text-black uppercase hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600"
									>
										Login
									</a>
									<a
										href="/register"
										className="w-full border border-gray-500 rounded-md py-2 px-3 lg:hidden inline-block text-sm text-black uppercase hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600"
									>
										Register
									</a>
								</>
							) : (
								<button
									onClick={handleLogout}
									className="w-full border border-gray-500 rounded-md py-2 px-3 lg:hidden inline-block text-sm text-black uppercase hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600"
								>
									Logout
								</button>
							)}
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default NavBar;
