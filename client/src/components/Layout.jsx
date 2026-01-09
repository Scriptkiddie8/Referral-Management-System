import logo from "../assets/logo.png";

const Layout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center gap-2">
          <img src={logo} alt="Worko Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-blue-600 hidden md:block">
            Worko Referral
          </span>
        </div>

        {/* Sidebar Navigation */}
        <nav className="px-4 space-y-2 mt-4 flex-1">
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium transition">
            Dashboard
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium transition">
            Candidates
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 font-medium transition">
            Add Candidate
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Topbar */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
