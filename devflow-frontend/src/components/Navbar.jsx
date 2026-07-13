const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          DevFlow
        </h1>

        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;