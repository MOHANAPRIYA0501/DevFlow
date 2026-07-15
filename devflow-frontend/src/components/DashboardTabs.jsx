const tabs = [
  { id: "tasks", label: "📋 Tasks" },
  { id: "notes", label: "📝 Notes" },
  { id: "snippets", label: "💻 Code Snippets" },
];

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-8 border-b border-gray-200">
      <div className="flex flex-wrap gap-3 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardTabs;