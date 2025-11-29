import { Link, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "./context/UserContext";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserList from "./pages/UsersList";
import Expense from "./pages/Expense";
import Categories from "./pages/Categories";
import { useDispatch } from "react-redux";
import { resetCategory, fetchUserCategories } from "./slices/categorySlice";
import { resetExpense, fetchUserExpenses } from "./slices/expenseSlice";

export default function App() {
  const { isLoggedIn, handleLogout, user } = useContext(UserContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchUserCategories());
      dispatch(fetchUserExpenses());
    }
  }, [dispatch]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F8FAFC", color: "#0F172A" }}
    >
      {/* Top bar */}
      <header className="w-full shadow-sm bg-white">
        <div className="max-w-6xl mx-auto px-6 py-1 flex items-center gap-6">
          <div>
            <h1
              className="text-2xl sm:text-3xl font-extrabold"
              style={{ color: "#0F172A" }}
            >
              FinTracker
            </h1>
            <p className="text-xs sm:text-sm mt-0.5 text-slate-600">
              Simple expense & income tracker
            </p>
          </div>

          {/* Nav */}
          <nav className="ml-auto">
            <ul className="flex items-center gap-2">
              {/* Not Logged In */}
              {!isLoggedIn && !localStorage.getItem("token") ? (
                <>
                  <li>
                    <Link
                      to="/Home"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60 transition"
                      style={{ color: "#2563EB" }} // blue
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/register"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60 transition"
                      style={{ color: "#16A34A" }} // green
                    >
                      Register
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/login"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60 transition"
                      style={{ color: "#2563EB" }}
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* Logged In Links */}
                  <li>
                    <Link
                      to="/account"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60 transition"
                      style={{ color: "#0F172A" }}
                    >
                      Account
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60 transition"
                      style={{ color: "#2563EB" }}
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/categories"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60 transition"
                      style={{ color: "#16A34A" }}
                    >
                      Categories
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/expense"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60 transition"
                      style={{ color: "#DC2626" }}
                    >
                      Expense
                    </Link>
                  </li>

                  {(user?.role === "admin" || user?.role === "moderator") && (
                    <li>
                      <Link
                        to="/users-list"
                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60 transition"
                        style={{ color: "#2563EB" }}
                      >
                        List users
                      </Link>
                    </li>
                  )}

                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        dispatch(resetCategory());
                        dispatch(resetExpense());
                      }}
                      className="ml-3 px-3 py-2 rounded-md text-sm font-medium border transition"
                      style={{
                        color: "#DC2626",
                        borderColor: "#DC262655",
                        backgroundColor: "transparent",
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-6 py-2">
          <section
            className="w-full bg-white rounded-2xl shadow-sm p-6 min-h-[70vh] flex flex-col"
            style={{ color: "#0F172A" }}
          >
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users-list" element={<UserList />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </section>
        </div>
      </main>
    </div>
  );
}
