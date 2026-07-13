import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import taskService from "../api/taskService";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

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

  // Edit Task
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // Delete Task
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
    <>
      <Navbar onLogout={handleLogout} />

      <div className="max-w-5xl mx-auto p-6">
        <TaskForm
          onTaskCreated={fetchTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />

        <h2 className="text-2xl font-bold mt-8 mb-6">
          My Tasks
        </h2>

        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Dashboard;