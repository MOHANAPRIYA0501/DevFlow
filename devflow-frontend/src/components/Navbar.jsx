import AuthLogo from "./AuthLogo";

const Navbar = ({ onLogout }) => {
  return (
    <nav
      className="
        sticky
        top-0
        z-50

        bg-black/40
        backdrop-blur-xl

        border-b
        border-white/10

        text-white
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          py-4

          flex
          items-center
          justify-between
        "
      >

        {/* Brand */}
        <AuthLogo
          size="small"
          showSubtitle={false}
        />


        {/* Logout */}
        <button
          onClick={onLogout}
          className="
            px-5
            py-2.5

            rounded-xl

            font-semibold

            text-black

            bg-gradient-to-r
            from-yellow-300
            via-yellow-400
            to-amber-500

            hover:from-yellow-200
            hover:to-amber-400

            transition-all
            duration-300

            hover:scale-105

            shadow-lg
            hover:shadow-yellow-500/30
          "
        >
          Logout
        </button>


      </div>

    </nav>
  );
};

export default Navbar;