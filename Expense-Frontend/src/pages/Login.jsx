import { useFormik } from "formik";
import { useContext } from "react";
import UserContext from "../context/UserContext";
//--------------------------------------------------------------------------------------------------------------
export default function Login() {
  const { handleLogin, serverError } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleLogin(values, resetForm);
    },
  });

  //--------------------------------------------------------------------------------------------------------------
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm shadow-md rounded-xl p-6 border border-gray-200 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 tracking-wide">
          Login Here!!
        </h2>

        {serverError && (
          <p className="text-center text-red-600 mb-3 bg-red-50 border border-red-200 rounded-md py-2 px-3">
            {serverError}
          </p>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              Enter email
            </label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 
                         placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              Enter password
            </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter password"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 
                         placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <input
              type="submit"
              value="Login"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold cursor-pointer
                         hover:bg-blue-700 transition shadow-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
