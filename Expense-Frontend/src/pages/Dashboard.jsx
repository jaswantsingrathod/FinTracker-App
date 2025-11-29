import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

//----------------------------------------------------------------------------------------
export default function Dashboard() {
  const { user } = useContext(UserContext);
  const { data: categoryData } = useSelector((state) => state.category);
  const { data: expenseData } = useSelector((state) => state.expense);

  //-----------------------------------------------------------------------------------------
  if (!user) {
    return (
      <h5 className="text-center text-gray-600 mt-10 animate-pulse">
        Loading....
      </h5>
    );
  }

  //-------------------------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-xl mx-auto bg-white shadow-md border border-gray-200 p-6 rounded-xl">

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Dashboard
        </h2>

        <div className="space-y-4 text-lg">

          <h4 className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
            <span className="font-semibold text-blue-600">Welcome:</span> {user.username}
          </h4>

          <h4 className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
            <span className="font-semibold text-emerald-600">Total Categories:</span> {categoryData.length}
          </h4>

          <h4 className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
            <span className="font-semibold text-red-600">Total Expenses:</span> {expenseData.length}
          </h4>

        </div>

      </div>
    </div>
  );
}
