import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

const Layout = ({ title, children }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col justify-between h-screen">
        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className="p-6 flex justify-center">
            <img src={logo} alt="Worko Logo" className="h-10" />
          </div>

          {/* Navigation */}
          <nav className="px-4 space-y-2 mt-6">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/refer"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              Referral Form
            </NavLink>
          </nav>
        </div>

        {/* Logout (Bottom) */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Topbar */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h1 className="text-xl font-bold text-gray-800 flex justify-center">
            {title}
          </h1>
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
