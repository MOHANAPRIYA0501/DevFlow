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
  <div
    className="
      bg-white/5
      backdrop-blur-xl

      border
      border-white/10

      rounded-3xl

      shadow-[0_20px_40px_rgba(0,0,0,0.25)]

      p-6
    "
  >

    <h2 className="text-2xl font-bold text-white mb-6">
      {editingNote ? "Edit Note" : "Create Note"}
    </h2>


    <form onSubmit={handleSubmit} className="space-y-5">


      <div>

        <label className="block text-sm font-medium text-gray-300 mb-2">
          Title
        </label>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          required

          className="
            w-full

            rounded-xl

            px-4
            py-3

            bg-black/30

            border
            border-white/10

            text-white

            placeholder:text-gray-500

            focus:outline-none

            focus:border-yellow-400

            focus:ring-4

            focus:ring-yellow-400/20

            transition
          "
        />

      </div>



      <div>

        <label className="block text-sm font-medium text-gray-300 mb-2">
          Content
        </label>


        <textarea
          name="content"
          placeholder="Write your note..."
          value={note.content}
          onChange={handleChange}
          rows="6"

          className="
            w-full

            rounded-xl

            px-4
            py-3

            bg-black/30

            border
            border-white/10

            text-white

            placeholder:text-gray-500

            resize-none

            focus:outline-none

            focus:border-yellow-400

            focus:ring-4

            focus:ring-yellow-400/20

            transition
          "
        />

      </div>



      <button
        type="submit"

        className="
          px-6
          py-3

          rounded-xl

          font-bold

          text-black

          bg-gradient-to-r
          from-yellow-300
          to-amber-500

          hover:scale-105

          transition-all

          shadow-lg
          shadow-yellow-500/20
        "
      >
        {editingNote ? "Update Note" : "Create Note"}

      </button>


    </form>

  </div>
);
};

export default NoteForm;