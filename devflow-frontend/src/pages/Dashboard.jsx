import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import taskService from "../api/taskService";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await taskService.getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Load tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Placeholder delete function
 const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmed) return;

  try {
    await taskService.deleteTask(id);

    alert("Task deleted successfully!");

    fetchTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
    alert("Failed to delete task");
  }
};

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={handleLogout}>Logout</button>

      <hr />
<TaskForm
  onTaskCreated={fetchTasks}
  editingTask={editingTask}
  setEditingTask={setEditingTask}
/>

      <hr />

      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              <strong>Priority:</strong> {task.priority}
            </p>

            <p>
              <strong>Status:</strong> {task.status}
            </p>

          <button
  onClick={() => {
    console.log("Edit clicked");
    console.log(task);
    setEditingTask(task);
  }}
>
  Edit
</button>

            <button
              onClick={() => handleDelete(task.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;