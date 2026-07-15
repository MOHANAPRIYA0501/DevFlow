const tabs = [
  { id: "tasks", label: "📋 Tasks" },
  { id: "notes", label: "📝 Notes" },
  { id: "snippets", label: "💻 Code Snippets" },
];

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-8">

      <div
        className="
          flex
          flex-wrap
          gap-3

          p-2

          rounded-2xl

          bg-white/5

          backdrop-blur-xl

          border
          border-white/10

          w-fit
        "
      >

        {tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-5
              py-3

              rounded-xl

              text-sm
              font-semibold

              transition-all
              duration-300

              ${
                activeTab === tab.id
                  ? `
                    bg-gradient-to-r
                    from-yellow-300
                    via-yellow-400
                    to-amber-500

                    text-black

                    shadow-lg
                    shadow-yellow-500/20

                    scale-105
                  `
                  : `
                    text-gray-400

                    hover:text-white

                    hover:bg-white/10
                  `
              }
            `}
          >
            {tab.label}
          </button>

        ))}

      </div>

    </div>
  );
};

export default DashboardTabs;