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
    <form onSubmit={handleSubmit}>
      <h2>{editingTask ? "Update Task" : "Create Task"}</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <br />
      <br />

      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      />

      <br />
      <br />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      <br />
      <br />

      <select
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>

      <br />
      <br />

      <button type="submit">
        {editingTask ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
};

export default TaskForm;