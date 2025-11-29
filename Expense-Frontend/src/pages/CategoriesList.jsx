import {
  removeCategories,
  assignEditId,
  resetEditId,
} from "../slices/categorySlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//-------------------------------------------------------------------------------------------------------------------------------
export default function CategoriesList() {
  const { data, errors, editId } = useSelector((state) => {
    return state.category;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetEditId());
    };
  }, []);

  //-------------------------------------------------------------------
  const handleRemove = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(removeCategories(id));
    }
  };

  const handleCancel = () => {
    dispatch(resetEditId());
  };

  //--------------------------------------------------------------------
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">
        Categories List — {data.length}
      </h4>

      {errors && (
        <p className="text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded-md">
          {errors}
        </p>
      )}

      <ul className="space-y-3">
        {data.map((ele) => {
          return (
            <li
              key={ele._id}
              className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <span className="text-gray-800 font-medium">{ele.name}</span>

              <div className="flex gap-2">
                {/* Edit Button */}
                <button
                  onClick={() => dispatch(assignEditId(ele._id))}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Edit
                </button>

                {/* Cancel Button (visible only for active edit) */}
                {ele._id === editId && (
                  <button
                    onClick={handleCancel}
                    className="px-3 py-1 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                )}

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(ele._id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
