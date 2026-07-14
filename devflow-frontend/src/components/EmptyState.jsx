const EmptyState = ({
  icon = "📋",
  title = "No Data",
  message = "Nothing to display.",
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-10 text-center">
      <div className="text-5xl mb-4">{icon}</div>

      <h2 className="text-xl font-semibold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;