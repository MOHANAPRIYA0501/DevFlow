import AuthLogo from "./AuthLogo";

const features = [
  {
    title: "Secure Authentication",
    description: "JWT • BCrypt • Spring Security",
  },
  {
    title: "Microservices Architecture",
    description: "Gateway • Eureka • REST APIs",
  },
  {
    title: "Developer Workspace",
    description: "Tasks • Notes • Code Snippets",
  },
];

const AuthLeftPanel = () => {
  return (
    <div
      className="
        hidden
        lg:flex
        lg:w-1/2
        relative
        p-12
        flex-col
        justify-between
        text-white
      "
    >

      {/* Top Section */}
      <div>

        <AuthLogo />

        <h2 className="mt-12 text-5xl font-bold leading-tight">
            Welcome to DevFlow
          <br />

          <span className="text-yellow-200">
            HELLO DEVELOPER!
          </span>

        </h2>


        <p className="mt-6 text-gray-400 text-lg leading-8 max-w-lg">
          A secure developer workspace to manage your tasks,
          notes, and reusable code snippets with modern
          microservices architecture.
        </p>

      </div>



      {/* Feature Cards */}
      <div className="space-y-4 mt-10">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="
              group
              p-5
              rounded-2xl

              bg-white/5
              backdrop-blur-xl

              border
              border-white/10

              hover:border-yellow-400/40

              transition-all
              duration-300

              hover:-translate-y-1
            "
          >

            <h3
              className="
                text-white
                font-semibold
                text-lg

                group-hover:text-yellow-400

                transition
              "
            >
              {feature.title}
            </h3>


            <p className="text-gray-400 text-sm mt-2">
              {feature.description}
            </p>


          </div>
        ))}

      </div>



      {/* Footer */}
      <p className="text-sm text-gray-500 mt-8">
        © 2026 DevFlow • Developer Productivity Platform
      </p>


    </div>
  );
};

export default AuthLeftPanel;