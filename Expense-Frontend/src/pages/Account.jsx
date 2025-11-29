import { useContext } from "react";
import UserContext from "../context/UserContext";

//------------------------------------------------------------------------------------------
export default function Account() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <h5 className="text-center text-gray-600 mt-10 animate-pulse">
        Loading.....
      </h5>
    );
  }

  //----------------------------------------------------------------------------------------
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg border border-gray-200 bg-white">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Account Page
        </h2>

        <div className="space-y-4 text-lg">
          <h4 className="p-3 rounded-lg border border-gray-200 bg-gray-50 font-medium text-gray-700">
            <span className="text-emerald-600 font-semibold">Email:</span> {user.email}
          </h4>

          <h4 className="p-3 rounded-lg border border-gray-200 bg-gray-50 font-medium text-gray-700">
            <span className="text-blue-600 font-semibold">User Role:</span> {user.role}
          </h4>
        </div>

      </div>
    </div>
  );
}
