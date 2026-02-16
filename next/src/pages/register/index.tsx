import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

type ApiError = {
  type: string;
  errors: Array<{
    code: string;
    detail: string;
    attr: string | null;
  }>;
};
export const RegistrationSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    first_name: z.string(),
    last_name: z.string(),
    password1: z.string().min(8, "Password must be at least 8 characters"),
    password2: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export default function Register() {
  type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;
  const formik = useFormik<RegistrationSchemaType>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password1: "",
      password2: "",
    },
    validationSchema: toFormikValidationSchema(RegistrationSchema),
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await fetch(
          "http://localhost:8000/api/auth/registration/",
          {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" },
          },
        );
        if (!res.ok) {
          const error: ApiError = await res.json();
          toast.error(error.errors?.[0]?.detail || "Registration failed");
          return;
        }
        const data = await res.json();
        console.log(data);
        toast.success("Registration Successful");
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "An error occured",
        );
      }
    },
  });
  return (
    <div>
      <Toaster />
      <div className="w-full flex items-center justify-center ">
        <div className="mt-7  w-full max-w-xl bg-white">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">
                Register
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                  href="/login"
                >
                  Sign in
                </a>
              </p>
            </div>
            <div className="mt-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-y-4">
                  <div className="flex flex-row w-full gap-x-4">
                    <div className="w-full">
                      <label
                        htmlFor="first_name"
                        className="block text-sm mb-2"
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          required
                          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          onChange={formik.handleChange}
                          value={formik.values.first_name}
                        />
                        {formik.touched.first_name &&
                        formik.errors.first_name ? (
                          <div className="mt-1 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                            {formik.errors.first_name}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="w-full">
                      <label htmlFor="last_name" className="block text-sm mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          required
                          className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          onChange={formik.handleChange}
                          value={formik.values.last_name}
                        />
                        {formik.touched.last_name && formik.errors.last_name ? (
                          <div className="mt-1 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                            {formik.errors.last_name}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
                        id="password"
                        name="password1"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.password1}
                        aria-describedby="password-error"
                      />
                      {formik.touched.password1 && formik.errors.password1 ? (
                        <div className="mt-1 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                          {formik.errors.password1}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm mb-2"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirm-password"
                        name="password2"
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.password2}
                      />
                      {formik.touched.password2 && formik.errors.password2 ? (
                        <div className="mt-1 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                          {formik.errors.password2}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Register
                    {/* {isLoading ? ( */}
                    {/*   <div */}
                    {/*     className="animate-spin inline-block size-5 border-[3px] border-current border-t-transparent text-white rounded-full" */}
                    {/*     role="status" */}
                    {/*     aria-label="loading" */}
                    {/*   > */}
                    {/*     <span className="sr-only">Loading...</span> */}
                    {/*   </div> */}
                    {/* ) : ( */}
                    {/*   "Register" */}
                    {/* )} */}
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
