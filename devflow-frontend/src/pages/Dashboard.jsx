import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import taskService from "../api/taskService";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Spinner from "../components/Spinner";
import EmptyState from "../components/EmptyState";
import ConfirmationModal from "../components/ConfirmationModal";
import toast from "react-hot-toast";
import DashboardTabs from "../components/DashboardTabs";
import TaskSection from "../components/TaskSection";

const Dashboard = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);
const [activeTab, setActiveTab] = useState("tasks");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);

      const response = await taskService.getTasks();
      setTasks(response.data);

    } catch (error) {
      console.error("Failed to load tasks:", error);
      toast.error("Failed to load tasks");

    } finally {
      setLoading(false);
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

  // Open Delete Modal
  const handleDelete = (id) => {
    setTaskToDelete(id);
    setShowDeleteModal(true);
  };

  // Confirm Delete
  const confirmDelete = async () => {
    try {
      await taskService.deleteTask(taskToDelete);

      toast.success("Task deleted successfully");

      fetchTasks();

    } catch (error) {
      console.error(error);
      toast.error("Failed to delete task");

    } finally {
      setShowDeleteModal(false);
      setTaskToDelete(null);
    }
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />

      <div className="max-w-5xl mx-auto p-6">

           <DashboardTabs
    activeTab={activeTab}
    setActiveTab={setActiveTab}
/>
       {activeTab === "tasks" && (
  <TaskSection
    tasks={tasks}
    loading={loading}
    editingTask={editingTask}
    setEditingTask={setEditingTask}
    fetchTasks={fetchTasks}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />
)}
      </div>

      <ConfirmationModal
        isOpen={showDeleteModal}
        title="Delete Task"
        message="Are you sure you want to delete this task? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => {
          setShowDeleteModal(false);
          setTaskToDelete(null);
        }}
      />
    </>
  );
};

export default Dashboard;