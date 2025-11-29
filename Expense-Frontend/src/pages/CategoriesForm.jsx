import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserCategories, updateCategories } from "../slices/categorySlice";
//--------------------------------------------------------------------------------------------------------------------------------------
export default function CategoriesForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { data, editId, errors } = useSelector((state) => {
    return state.category;
  });

  //-------------------------------------------------------------------------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name };
    const handleReset = () => {
      setName("");
    };
    if (editId) {
      dispatch(updateCategories({ editId, formData, handleReset }));
    } else {
      dispatch(addUserCategories({ formData, handleReset }));
    }
  };
  //-------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    if (editId) {
      const category = data.find((ele) => ele._id == editId);
      setName(category.name);
    } else {
      setName("");
    }
  }, [editId]);
  //--------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">
        {editId ? "Edit Category" : "Add Category"}
      </h4>

      {errors && (
        <p className="text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded-md">
          {errors}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Category Name"
          className="flex-1 p-2 border border-gray-300 rounded-lg bg-white 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />

        <input
          type="submit"
          value={editId ? "Update" : "Add"}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer 
                     hover:bg-blue-700 transition font-medium"
        />
      </form>
    </div>
  );
}
