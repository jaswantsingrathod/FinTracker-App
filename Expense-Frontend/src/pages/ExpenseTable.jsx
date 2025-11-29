import { useSelector } from "react-redux";
import { format } from "date-fns";

export default function ExpenseTable() {
  const { data } = useSelector((state) => state.expense);
  const categoryData = useSelector((state) => state.category.data);

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">Expense Table</h4>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-md border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-3 border border-gray-200 text-left">Id</th>
              <th className="py-2 px-3 border border-gray-200 text-left">Title</th>
              <th className="py-2 px-3 border border-gray-200 text-left">Expense Date</th>
              <th className="py-2 px-3 border border-gray-200 text-left">Amount</th>
              <th className="py-2 px-3 border border-gray-200 text-left">Description</th>
              <th className="py-2 px-3 border border-gray-200 text-left">Category</th>
            </tr>
          </thead>

          <tbody>
            {data.map((ele, i) => (
              <tr
                key={ele._id}
                className="hover:bg-gray-50 transition"
              >
                <td className="py-2 px-3 border border-gray-200">{i + 1}</td>
                <td className="py-2 px-3 border border-gray-200">{ele.title}</td>
                <td className="py-2 px-3 border border-gray-200">
                  {format(new Date(ele.expenseDate || new Date()), "dd/MM/yyyy")}
                </td>
                <td className="py-2 px-3 border border-gray-200">{ele.amount}</td>
                <td className="py-2 px-3 border border-gray-200">{ele.description}</td>
                <td className="py-2 px-3 border border-gray-200">
                  {categoryData.find((cat) => cat._id == ele.category)?.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
