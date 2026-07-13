import { useEffect, useState } from "react";
import taskService from "../api/taskService";

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
        alert("Task updated successfully!");
      } else {
        await taskService.createTask(task);
        alert("Task created successfully!");
      }

      clearForm();

      if (onTaskCreated) {
        onTaskCreated();
      }
    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        {editingTask ? "Update Task" : "Create Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={task.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter task description"
            value={task.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Priority & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={task.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="TODO">TODO</option>
              <option value="IN_PROGRESS">IN PROGRESS</option>
              <option value="DONE">DONE</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
        >
          {editingTask ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;