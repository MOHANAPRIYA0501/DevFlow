const EmptyState = ({
  icon = "📋",
  title = "No Data",
  message = "Nothing to display.",
}) => {
  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl

        border
        border-white/10

        rounded-3xl

        shadow-[0_20px_40px_rgba(0,0,0,0.25)]

        p-10

        text-center

        hover:border-yellow-400/30

        transition-all
        duration-300
      "
    >

      <div className="text-5xl mb-4">
        {icon}
      </div>


      <h2
        className="
          text-xl
          font-bold

          text-white
        "
      >
        {title}
      </h2>


      <p
        className="
          text-gray-400

          mt-2
        "
      >
        {message}
      </p>


    </div>
  );
};

export default EmptyState;