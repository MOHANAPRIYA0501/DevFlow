const StatsCards = ({ tasks, notes, snippets }) => {
  const stats = [
    {
      title: "Tasks",
      icon: "📋",
      count: tasks.length,
    },
    {
      title: "Notes",
      icon: "📝",
      count: notes.length,
    },
    {
      title: "Snippets",
      icon: "💻",
      count: snippets.length,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                {item.title}
              </p>

              <h2 className="mt-2 text-4xl font-bold text-gray-900">
                {item.count}
              </h2>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;