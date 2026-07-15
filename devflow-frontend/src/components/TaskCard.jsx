const TaskCard = ({ task, onEdit, onDelete }) => {
  const priorityColor = {
    LOW: "bg-green-400/10 text-green-300 border-green-400/20",
    MEDIUM: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
    HIGH: "bg-red-400/10 text-red-300 border-red-400/20",
  };

  const statusColor = {
    TODO: "bg-gray-400/10 text-gray-300 border-gray-400/20",
    IN_PROGRESS: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    DONE: "bg-green-400/10 text-green-300 border-green-400/20",
  };

  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl

        border
        border-white/10

        rounded-3xl

        p-6
        mb-5

        shadow-[0_20px_40px_rgba(0,0,0,0.25)]

        hover:border-yellow-400/30
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >

      <h3 className="text-xl font-bold text-white">
        {task.title}
      </h3>


      <p className="text-gray-400 mt-2">
        {task.description}
      </p>


      <div className="flex flex-wrap gap-3 mt-5">

        <span
          className={`
            px-3 py-1 rounded-full text-sm font-semibold border
            ${priorityColor[task.priority]}
          `}
        >
          {task.priority}
        </span>


        <span
          className={`
            px-3 py-1 rounded-full text-sm font-semibold border
            ${statusColor[task.status]}
          `}
        >
          {task.status.replace("_", " ")}
        </span>

      </div>


      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">

        <button
          onClick={() => onEdit(task)}
          className="
            px-4 py-2 rounded-xl

            bg-gradient-to-r
            from-yellow-300
            to-amber-500

            text-black
            font-semibold

            hover:scale-105

            transition
          "
        >
          Edit
        </button>


        <button
          onClick={() => onDelete(task.id)}
          className="
            px-4 py-2 rounded-xl

            bg-red-500/80
            hover:bg-red-600

            text-white
            font-semibold

            transition
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default TaskCard;