const tabs = [
  { id: "tasks", label: "📋 Tasks" },
  { id: "notes", label: "📝 Notes" },
  { id: "snippets", label: "💻 Code Snippets" },
];

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-3 border-b mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-5 py-3 font-medium transition border-b-2 ${
            activeTab === tab.id
              ? "border-indigo-600 text-indigo-600"
              : "border-transparent text-gray-500 hover:text-indigo-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs;