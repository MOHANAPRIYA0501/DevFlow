import { useEffect, useState } from "react";
import noteService from "../api/noteService";
import toast from "react-hot-toast";

const NoteForm = ({ onNoteCreated, editingNote, setEditingNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (editingNote) {
      setNote({
        title: editingNote.title,
        content: editingNote.content,
      });
    }
  }, [editingNote]);

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingNote) {
        await noteService.updateNote(editingNote.id, note);
        toast.success("Note updated successfully");
        setEditingNote(null);
      } else {
        await noteService.createNote(note);
        toast.success("Note created successfully");
      }

      setNote({
        title: "",
        content: "",
      });

      onNoteCreated();
    } catch (error) {
      console.error(error);
      toast.error("Operation failed");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">
        {editingNote ? "Edit Note" : "Create Note"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          name="content"
          placeholder="Write your note..."
          value={note.content}
          onChange={handleChange}
          rows="6"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
        >
          {editingNote ? "Update Note" : "Create Note"}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;