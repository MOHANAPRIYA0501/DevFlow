import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import taskService from "../api/taskService";
import noteService from "../api/noteService";

import Navbar from "../components/Navbar";
import ConfirmationModal from "../components/ConfirmationModal";
import DashboardTabs from "../components/DashboardTabs";
import TaskSection from "../components/TaskSection";
import NoteSection from "../components/NoteSection";

const Dashboard = () => {
  const navigate = useNavigate();

  // Task State
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);

  // Note State
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [loadingNotes, setLoadingNotes] = useState(false);

  // Dashboard State
  const [activeTab, setActiveTab] = useState("tasks");

  // Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
const [deleteType, setDeleteType] = useState("");

  // =========================
  // TASKS
  // =========================

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

  // =========================
  // NOTES
  // =========================

  const fetchNotes = async () => {
    try {
      setLoadingNotes(true);

      const response = await noteService.getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error("Failed to load notes:", error);
      toast.error("Failed to load notes");
    } finally {
      setLoadingNotes(false);
    }
  };

  // Load data
  useEffect(() => {
    fetchTasks();
    fetchNotes();
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // =========================
  // TASKS
  // =========================

  const handleEdit = (task) => {
    setEditingTask(task);
  };

const handleDelete = (id) => {
  setItemToDelete(id);
  setDeleteType("task");
  setShowDeleteModal(true);
};
const confirmDelete = async () => {
  try {
    if (deleteType === "task") {
      await taskService.deleteTask(itemToDelete);
      toast.success("Task deleted successfully");
      fetchTasks();
    } else if (deleteType === "note") {
      await noteService.deleteNote(itemToDelete);
      toast.success("Note deleted successfully");
      fetchNotes();
    }
  } catch (error) {
    console.error(error);
    toast.error("Delete failed");
  } finally {
    setShowDeleteModal(false);
    setItemToDelete(null);
    setDeleteType("");
  }
};

  // =========================
  // NOTES
  // =========================

  const handleEditNote = (note) => {
    setEditingNote(note);
  };

 const handleDeleteNote = (id) => {
  setItemToDelete(id);
  setDeleteType("note");
  setShowDeleteModal(true);
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

        {activeTab === "notes" && (
          <NoteSection
            notes={notes}
            loading={loadingNotes}
            editingNote={editingNote}
            setEditingNote={setEditingNote}
            fetchNotes={fetchNotes}
            handleEdit={handleEditNote}
            handleDelete={handleDeleteNote}
          />
        )}
      </div>

      <ConfirmationModal
  isOpen={showDeleteModal}
  title={deleteType === "note" ? "Delete Note" : "Delete Task"}
  message={
    deleteType === "note"
      ? "Are you sure you want to delete this note? This action cannot be undone."
      : "Are you sure you want to delete this task? This action cannot be undone."
  }
  onConfirm={confirmDelete}
  onCancel={() => {
    setShowDeleteModal(false);
    setItemToDelete(null);
    setDeleteType("");
  }}
/>
    </>
  );
};

export default Dashboard;