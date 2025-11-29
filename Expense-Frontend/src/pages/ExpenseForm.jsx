import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../slices/expenseSlice";

export default function ExpenseForm() {
  const { data, errors } = useSelector((state) => {
    return state.category;
  });
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
    const formData = {
      title: form.title,
      expenseDate: form.expenseDate,
      amount: form.amount,
      category: form.category,
      description: form.description,
    };
    const resetForm = () => {
      setForm({
        title: "",
        expenseDate: "",
        amount: "",
        category: "",
        description: "",
      });
    };
    dispatch(addExpense({ formData, resetForm }));
  };
  return (
    <div>
      <h4>Add Expense</h4>
      {errors && <p>{errors}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={form.title}
            name="title"
            placecholder="Add expense"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="Date"
            value={form.expenseDate}
            name="expenseDate"
            placeholder="Enter Expense Date"
            onChange={handleChange}
          />
        </div>
        <div>
          <select value={form.category} name="category" onChange={handleChange}>
            <option value="">Select Category</option>
            {data.map((ele) => {
              return (
                <option key={ele._id} value={ele._id}>
                  {ele.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
