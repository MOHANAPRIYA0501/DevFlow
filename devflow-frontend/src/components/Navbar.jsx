const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <h2>DevFlow</h2>

      <button onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;