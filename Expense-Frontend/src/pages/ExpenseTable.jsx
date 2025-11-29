import { useSelector } from "react-redux";
import { format } from "date-fns";
export default function ExpenseTable() {
  const { data } = useSelector((state) => {
    return state.expense;
  });
  const categoryData = useSelector((state) => {
    return state.category.data;
  });
  return (
    <div>
      <h4>Expense Table</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Id no</th>
            <th>Title</th>
            <th>Expense Date</th>
            <th>amount</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            return (
              <tr key={ele._id}>
                <td>{i + 1}</td>
                <td>{ele.title}</td>
                <td>
                  {format(
                    new Date(ele.expenseDate || new Date()),
                    "dd/mm/yyyy"
                  )}
                </td>
                <td>{ele.amount}</td>
                <td>{ele.description}</td>
                <td>
                  {categoryData.find((cat) => cat._id == ele.category)?.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
