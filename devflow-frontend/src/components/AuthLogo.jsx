const AuthLogo = ({
  size = "large",
  showSubtitle = true,
}) => {
  const isSmall = size === "small";

  const logoSize = isSmall
    ? "w-12 h-12 text-xl rounded-xl"
    : "w-16 h-16 text-3xl rounded-2xl";

  return (
    <div className="flex items-center gap-4">

      {/* Logo Icon */}
      <div
        className={`
          ${logoSize}

          flex
          items-center
          justify-center

          font-bold
          text-black

          bg-gradient-to-br
          from-yellow-300
          via-amber-400
          to-orange-500

          border
          border-yellow-200/40

          shadow-[0_0_40px_rgba(251,191,36,0.45)]

          transition-all
          duration-300

          hover:scale-105
        `}
      >
        {"</>"}
      </div>


      {/* Brand Text */}
      <div>

        <h1
          className={`
            ${isSmall ? "text-xl" : "text-3xl"}

            font-extrabold
            tracking-tight

            text-white
          `}
        >
          DevFlow
        </h1>


        {showSubtitle && (
          <p className="text-gray-400 text-sm mt-1">
            Developer Productivity Platform
          </p>
        )}

      </div>

    </div>
  );
};

export default AuthLogo;