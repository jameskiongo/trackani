import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useLoginMutation } from "../../services";
import { useAuth } from "../utils/AuthProvider";

function Login() {
	const { handleLogin } = useAuth();
	const navigate = useNavigate();
	const [login, { isLoading }] = useLoginMutation();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string().required("Password is required"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await login(values).unwrap();
				const { access, refresh } = response;
				localStorage.setItem("accessToken", access);
				localStorage.setItem("refreshToken", refresh);
				handleLogin();
				toast.success("Login successful");
				navigate("/");
			} catch (error) {
				toast.error(error.data.errors[0].detail);
			}
		},
	});
	return (
		<div>
			<div className="w-full flex items-center justify-center ">
				<div className="mt-7  w-full max-w-xl bg-white">
					<div className="p-4 sm:p-7">
						<div className="text-center">
							<h1 className="block text-2xl font-bold text-gray-800">Login</h1>
							<p className="mt-2 text-sm text-gray-600">
								Don't have an account?{" "}
								<a
									className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
									href="/register"
								>
									Sign up
								</a>
							</p>
						</div>
						<div className="mt-5">
							<form onSubmit={formik.handleSubmit}>
								<div className="grid gap-y-4">
									<div>
										<label htmlFor="email" className="block text-sm mb-2">
											Email address
										</label>
										<div className="relative">
											<input
												type="email"
												name="email"
												required
												className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
												onChange={formik.handleChange}
												value={formik.values.email}
											/>
											{formik.touched.email && formik.errors.email ? (
												<div className="mt-1 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
													{formik.errors.email}
												</div>
											) : null}
										</div>
									</div>
									<div>
										<label htmlFor="password" className="block text-sm mb-2">
											Password
										</label>
										<div className="relative">
											<input
												type="password"
												name="password"
												className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
												required
												onChange={formik.handleChange}
												value={formik.values.password}
												aria-describedby="password-error"
											/>
											{formik.touched.password && formik.errors.password ? (
												<div className="mt-1 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
													{formik.errors.password}
												</div>
											) : null}
										</div>
									</div>

									<button
										type="submit"
										className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
									>
										{isLoading ? (
											<div
												className="animate-spin inline-block size-5 border-[3px] border-current border-t-transparent text-white rounded-full"
												// role="status"
												// aria-label="loading"
											>
												<span className="sr-only">Loading...</span>
											</div>
										) : (
											"Login"
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
