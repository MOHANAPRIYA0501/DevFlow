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
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3

        gap-6
        mb-8
      "
    >

      {stats.map((item) => (

        <div
          key={item.title}
          className="
            group

            bg-white/5
            backdrop-blur-xl

            border
            border-white/10

            rounded-3xl

            p-6

            shadow-[0_20px_40px_rgba(0,0,0,0.25)]

            transition-all
            duration-300

            hover:-translate-y-2

            hover:border-yellow-400/30

            hover:shadow-[0_20px_50px_rgba(251,191,36,0.12)]
          "
        >

          <div className="flex items-center justify-between">


            <div>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-400
                "
              >
                {item.title}
              </p>


              <h2
                className="
                  mt-2

                  text-4xl

                  font-bold

                  text-white
                "
              >
                {item.count}
              </h2>


            </div>



            <div
              className="
                flex
                h-16
                w-16

                items-center
                justify-center

                rounded-2xl

                bg-yellow-400/10

                border
                border-yellow-400/20

                text-3xl

                transition

                group-hover:scale-110

                group-hover:bg-yellow-400/20
              "
            >
              {item.icon}
            </div>


          </div>


        </div>

      ))}

    </div>
  );
};

export default StatsCards;