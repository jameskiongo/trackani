"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function validateWithZod<T>(schema: z.ZodSchema<T>) {
  return async (values: T) => {
    const result = schema.safeParse(values);
    if (result.success) return {};
    return result.error.issues.reduce(
      (acc, issue) => ({ ...acc, [issue.path[0]]: issue.message }),
      {} as Record<string, string>,
    );
  };
}

export default function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: validateWithZod(loginSchema),
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      setSubmitting(false);

      if (result?.error) {
        setStatus("Invalid email or password.");
      } else {
        router.push("/");
      }
    },
  });

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="mt-7 w-full max-w-xl bg-white">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">Login</h1>
              <p className="mt-2 text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-blue-600 decoration-2
                focus:outline-none font-medium"
                >
                  Sign up
                </a>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-y-4">
                  {formik.status && (
                    <p className="text-sm text-red-600 text-center">
                      {formik.status}
                    </p>
                  )}
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      {...formik.getFieldProps("email")}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm mb-2">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      {...formik.getFieldProps("password")}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    {formik.touched.password && formik.errors.password && (
                      <p className="mt-1 text-xs text-red-600">
                        {formik.errors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {formik.isSubmitting ? "Logging in..." : "Login"}
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
