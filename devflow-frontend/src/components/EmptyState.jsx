const EmptyState = () => {
  return (
    <div className="bg-white rounded-xl shadow p-10 text-center">
      <div className="text-5xl mb-4">📋</div>

      <h2 className="text-xl font-semibold text-gray-800">
        No tasks yet
      </h2>

      <p className="text-gray-500 mt-2">
        Create your first task to get started.
      </p>
    </div>
  );
};

export default EmptyState;