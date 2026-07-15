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
    <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">{item.count}</h2>
            </div>

            <div className="text-4xl">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;