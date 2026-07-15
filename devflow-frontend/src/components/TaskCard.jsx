const TaskCard = ({ task, onEdit, onDelete }) => {
  const priorityColor = {
    LOW: "bg-green-100 text-green-700",
    MEDIUM: "bg-yellow-100 text-yellow-700",
    HIGH: "bg-red-100 text-red-700",
  };

  const statusColor = {
    TODO: "bg-gray-100 text-gray-700",
    IN_PROGRESS: "bg-blue-100 text-blue-700",
    DONE: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-gray-300 hover:shadow-lg transition-all duration-300 p-6 mb-5">
      <h3 className="text-xl font-bold text-gray-800">
        {task.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-5">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[task.status]}`}
        >
          {task.status.replace("_", " ")}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
        <button
          onClick={() => onEdit(task)}
         className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
           className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"          >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;