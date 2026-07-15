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
import snippetService from "../api/snippetService";
import SnippetSection from "../components/SnippetSection";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";

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

  // Snippet State
const [snippets, setSnippets] = useState([]);
const [editingSnippet, setEditingSnippet] = useState(null);
const [loadingSnippets, setLoadingSnippets] = useState(false);

  // Dashboard State
  const [activeTab, setActiveTab] = useState("tasks");

  // Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
const [deleteType, setDeleteType] = useState("");

const [searchTerm, setSearchTerm] = useState("");
  // =========================
  // TASKS
  // =========================

  const fetchTasks = async () => {
    try {
      setLoading(true);

     const response = await taskService.getTasks();

console.log("API Response:", response.data);

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

  const fetchSnippets = async () => {
  try {
    setLoadingSnippets(true);

    const response = await snippetService.getSnippets();

    setSnippets(response.data);

  } catch (error) {
    console.error(error);
    toast.error("Failed to load snippets");

  } finally {
    setLoadingSnippets(false);
  }
};
  // Load data
useEffect(() => {
  fetchTasks();
  fetchNotes();
  fetchSnippets();
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

const handleEditSnippet = (snippet) => {
  setEditingSnippet(snippet);
};

const handleDeleteSnippet = (id) => {
  setItemToDelete(id);
  setDeleteType("snippet");
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

    } else if (deleteType === "snippet") {
      await snippetService.deleteSnippet(itemToDelete);
      toast.success("Snippet deleted successfully");
      fetchSnippets();
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
 

const filteredTasks = tasks.filter((task) =>
  (task.title || "").toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredNotes = notes.filter((note) =>
  (note.title || "").toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredSnippets = snippets.filter((snippet) =>
  (snippet.title || "").toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <>
      <Navbar onLogout={handleLogout} />

<div className="max-w-5xl mx-auto p-6">

  <StatsCards
    tasks={tasks}
    notes={notes}
    snippets={snippets}
  />

  <SearchBar
    value={searchTerm}
    onChange={setSearchTerm}
    placeholder={
      activeTab === "tasks"
        ? "Search tasks..."
        : activeTab === "notes"
        ? "Search notes..."
        : "Search snippets..."
    }
  />
        <DashboardTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "tasks" && (
          <TaskSection
            tasks={filteredTasks}
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
              notes={filteredNotes}
            loading={loadingNotes}
            editingNote={editingNote}
            setEditingNote={setEditingNote}
            fetchNotes={fetchNotes}
            handleEdit={handleEditNote}
            handleDelete={handleDeleteNote}
          />
        )}

        {activeTab === "snippets" && (
  <SnippetSection
  snippets={filteredSnippets}
      loading={loadingSnippets}
    editingSnippet={editingSnippet}
    setEditingSnippet={setEditingSnippet}
    fetchSnippets={fetchSnippets}
    handleEdit={handleEditSnippet}
    handleDelete={handleDeleteSnippet}
  />
)}
      </div>

  <ConfirmationModal
  isOpen={showDeleteModal}
  title={
    deleteType === "task"
      ? "Delete Task"
      : deleteType === "note"
      ? "Delete Note"
      : "Delete Snippet"
  }
  message={
    deleteType === "task"
      ? "Are you sure you want to delete this task? This action cannot be undone."
      : deleteType === "note"
      ? "Are you sure you want to delete this note? This action cannot be undone."
      : "Are you sure you want to delete this snippet? This action cannot be undone."
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