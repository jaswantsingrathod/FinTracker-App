import { useFormik } from "formik";
import { useContext } from "react";
import UserContext from "../context/UserContext";

//-------------------------------------------------------------------------------------------------
export default function Register() {
  const { handleRegister, serverError } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleRegister(values, resetForm);
    },
  });

  //-----------------------------------------------------------------------------------------------
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-emerald-600 text-center mb-4">
          Register With Us!!
        </h2>

        {serverError && (
          <p className="text-red-600 text-center mb-3 bg-red-50 border border-red-200 rounded-md py-2 px-3">
            {serverError}
          </p>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-gray-700 mb-1">Enter Name</label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Enter Name"
              className="w-full p-2 rounded-md bg-white text-gray-800 border border-gray-300
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Enter email</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
              className="w-full p-2 rounded-md bg-white text-gray-800 border border-gray-300
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Enter password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter password"
              className="w-full p-2 rounded-md bg-white text-gray-800 border border-gray-300
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            />
          </div>

          {/* Button */}
          <div>
            <input
              type="submit"
              value="Register"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white 
                         font-semibold py-2 rounded-md cursor-pointer transition shadow-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
