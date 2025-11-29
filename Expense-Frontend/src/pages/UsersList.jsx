import { useEffect, useState, useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "../config/axios";
//------------------------------------------------------------------------
export default function UserList() {
  const [users, setUsers] = useState([]);
  const { user } = useContext(UserContext);

  //-----------------------------------------------------------------------------
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/users", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  //---------------------------------------------------------------------------
  const handleRemove = async (id, email) => {
    const userConfirm = window.confirm("Are you sure?");
    if (userConfirm) {
      const input = window.prompt("Enter Email to delete");
      if (input == email) {
        try {
          const response = await axios.delete(`/users/${id}`, {
            headers: { Authorization: localStorage.getItem("token") },
          });
          const newArr = users.filter((ele) => ele._id !== id);
          setUsers(newArr);
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Incorrect email");
      }
    }
  };

  //------------------------------------------------------------------------------------------------------------------
  if (!user) {
    return (
      <h4 className="text-center text-gray-600 mt-10 animate-pulse">
        Loading...
      </h4>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-md rounded-xl p-6">

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          User List
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-3 border border-gray-200 text-left">Username</th>
                <th className="py-2 px-3 border border-gray-200 text-left">Email</th>
                <th className="py-2 px-3 border border-gray-200 text-left">Role</th>
                {user.role === "admin" && (
                  <th className="py-2 px-3 border border-gray-200 text-left">Action</th>
                )}
              </tr>
            </thead>

            <tbody>
              {users.map((ele) => (
                <tr key={ele._id} className="hover:bg-gray-50">
                  <td className="py-2 px-3 border border-gray-200">{ele.username}</td>
                  <td className="py-2 px-3 border border-gray-200">{ele.email}</td>
                  <td className="py-2 px-3 border border-gray-200 capitalize">{ele.role}</td>

                  {user.role === "admin" && (
                    <td className="py-2 px-3 border border-gray-200">
                      {user._id !== ele._id && (
                        <button
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                          onClick={() => handleRemove(ele._id, ele.email)}
                        >
                          Remove
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
