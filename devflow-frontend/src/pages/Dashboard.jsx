import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import taskService from "../api/taskService";

const Dashboard = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskService.getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to DevFlow.</p>

      <button onClick={handleLogout}>Logout</button>

      <hr />

      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Status: {task.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;