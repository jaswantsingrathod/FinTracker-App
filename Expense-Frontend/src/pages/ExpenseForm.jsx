import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../slices/expenseSlice";

export default function ExpenseForm() {
  const { data, errors } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    expenseDate: "",
    amount: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...form };
    const resetForm = () =>
      setForm({
        title: "",
        expenseDate: "",
        amount: "",
        category: "",
        description: "",
      });

    dispatch(addExpense({ formData, resetForm }));
  };

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">Add Expense</h4>

      {errors && (
        <p className="text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded-md">
          {errors}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <input
            type="text"
            value={form.title}
            name="title"
            placeholder="Expense Title"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg bg-white 
                       focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Date */}
        <div>
          <input
            type="date"
            value={form.expenseDate}
            name="expenseDate"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg bg-white
                       focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <select
            value={form.category}
            name="category"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg bg-white
                       text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="">Select Category</option>
            {data.map((ele) => (
              <option key={ele._id} value={ele._id}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <textarea
            name="description"
            value={form.description}
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg bg-white 
                       focus:ring-2 focus:ring-yellow-500 outline-none h-24"
          ></textarea>
        </div>

        {/* Amount */}
        <div>
          <input
            type="text"
            name="amount"
            value={form.amount}
            placeholder="Amount"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg bg-white 
                       focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Add"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white 
                     font-semibold py-2 rounded-lg cursor-pointer transition"
        />
      </form>
    </div>
  );
}
