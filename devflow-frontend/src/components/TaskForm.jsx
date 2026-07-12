import { useState } from "react";
import taskService from "../api/taskService";

const TaskForm = ({ onTaskCreated }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
    status: "TODO",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await taskService.createTask(task);

      alert("Task created successfully!");

      setTask({
        title: "",
        description: "",
        priority: "MEDIUM",
        status: "TODO",
      });

      if (onTaskCreated) {
        onTaskCreated();
      }
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <br /><br />

      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      />

      <br /><br />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      <br /><br />

      <select
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>

      <br /><br />

      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;