const Navbar = ({ onLogout }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold tracking-wide">
            DevFlow
          </h1>
          <p className="text-sm text-slate-300">
            Developer Productivity Dashboard
          </p>
        </div>

        <button
          onClick={onLogout}
          className="w-full sm:w-auto bg-red-500 hover:bg-red-600 px-5 py-2.5 rounded-lg font-medium transition duration-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;