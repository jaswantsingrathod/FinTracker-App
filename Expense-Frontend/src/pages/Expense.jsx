import ExpenseTable from "./ExpenseTable";
import ExpenseForm from "./ExpenseForm";

export default function Expense() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Expense Container
      </h2>

      {/* Layout: left = form, right = table */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start">
        {/* LEFT: Form (narrower on larger screens) */}
        <div className="w-full md:w-1/3">
          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
            <ExpenseForm />
          </div>
        </div>

        {/* RIGHT: Table (takes remaining space) */}
        <div className="w-full md:flex-1">
          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 overflow-hidden">
            <ExpenseTable />
          </div>
        </div>
      </div>
    </div>
  );
}
