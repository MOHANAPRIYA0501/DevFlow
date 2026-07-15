import { useEffect, useState } from "react";
import taskService from "../api/taskService";
import toast from "react-hot-toast";

const TaskForm = ({
  onTaskCreated,
  editingTask,
  setEditingTask,
}) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
    status: "TODO",
  });

  useEffect(() => {
    if (editingTask) {
      setTask({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        status: editingTask.status,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setTask({
      title: "",
      description: "",
      priority: "MEDIUM",
      status: "TODO",
    });

    setEditingTask(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingTask) {
        await taskService.updateTask(editingTask.id, task);
       toast.success("Task updated successfully!");
      } else {
        await taskService.createTask(task);
       toast.success("Task created successfully!");
      }

      clearForm();

      if (onTaskCreated) {
        onTaskCreated();
      }
    } catch (error) {
      console.error(error);
      toast.error("Operation failed!");
    }
  };

  return (
  <div
    className="
      bg-white/5
      backdrop-blur-xl

      border
      border-white/10

      rounded-3xl

      shadow-[0_20px_40px_rgba(0,0,0,0.25)]

      p-6
    "
  >

    <h2 className="text-2xl font-bold text-white mb-6">
      {editingTask ? "Update Task" : "Create Task"}
    </h2>


    <form onSubmit={handleSubmit} className="space-y-5">


      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Title
        </label>

        <input
          type="text"
          name="title"
          placeholder="Enter task title"
          value={task.title}
          onChange={handleChange}
          required

          className="
            w-full

            rounded-xl

            px-4
            py-3

            bg-black/30

            border
            border-white/10

            text-white

            placeholder:text-gray-500

            focus:outline-none

            focus:border-yellow-400

            focus:ring-4

            focus:ring-yellow-400/20
          "
        />

      </div>



      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>

        <textarea
          name="description"
          placeholder="Enter task description"
          value={task.description}
          onChange={handleChange}
          required
          rows="4"

          className="
            w-full

            rounded-xl

            px-4
            py-3

            bg-black/30

            border
            border-white/10

            text-white

            placeholder:text-gray-500

            resize-none

            focus:outline-none

            focus:border-yellow-400

            focus:ring-4

            focus:ring-yellow-400/20
          "
        />

      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Priority
          </label>

          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}

            className="
              w-full

              rounded-xl

              px-4
              py-3

              bg-black/30

              border
              border-white/10

              text-white

              focus:outline-none

              focus:border-yellow-400
            "
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>

          </select>

        </div>



        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Status
          </label>

          <select
            name="status"
            value={task.status}
            onChange={handleChange}

            className="
              w-full

              rounded-xl

              px-4
              py-3

              bg-black/30

              border
              border-white/10

              text-white

              focus:outline-none

              focus:border-yellow-400
            "
          >

            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="DONE">DONE</option>

          </select>

        </div>


      </div>



      <button
        type="submit"

        className="
          w-full

          py-3

          rounded-xl

          font-bold

          text-black

          bg-gradient-to-r
          from-yellow-300
          to-amber-500

          hover:scale-[1.02]

          transition-all

          shadow-lg
          shadow-yellow-500/20
        "
      >
        {editingTask ? "Update Task" : "Create Task"}

      </button>


    </form>

  </div>
);
};

export default TaskForm;