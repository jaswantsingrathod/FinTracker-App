import CategoriesForm from "./CategoriesForm";
import CategoriesList from "./CategoriesList";

//--------------------------------------------------------------------
export default function Categories() {
  //----------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-white px-4 py-10">

      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Categories
      </h3>

      <div className="max-w-2xl mx-auto space-y-8">

        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
          <CategoriesForm />
        </div>

        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
          <CategoriesList />
        </div>

      </div>

    </div>
  );
}
