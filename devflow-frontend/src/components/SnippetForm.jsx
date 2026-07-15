import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import snippetService from "../api/snippetService";

const SnippetForm = ({
  onSnippetCreated,
  editingSnippet,
  setEditingSnippet,
}) => {
  const [snippet, setSnippet] = useState({
    title: "",
    code: "",
    language: "",
    description: "",
  });

  useEffect(() => {
    if (editingSnippet) {
      setSnippet({
        title: editingSnippet.title,
        code: editingSnippet.code,
        language: editingSnippet.language,
        description: editingSnippet.description,
      });
    }
  }, [editingSnippet]);

  const handleChange = (e) => {
    setSnippet({
      ...snippet,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingSnippet) {
        await snippetService.updateSnippet(editingSnippet.id, snippet);
        toast.success("Snippet updated successfully");
        setEditingSnippet(null);
      } else {
        await snippetService.createSnippet(snippet);
        toast.success("Snippet created successfully");
      }

      setSnippet({
        title: "",
        code: "",
        language: "",
        description: "",
      });

      onSnippetCreated();

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
      {editingSnippet ? "Edit Snippet" : "Create Snippet"}
    </h2>


    <form onSubmit={handleSubmit} className="space-y-5">


      <input
        type="text"
        name="title"
        placeholder="Snippet Title"
        value={snippet.title}
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
        "
      />



      <input
        type="text"
        name="language"
        placeholder="Language (Java, Python...)"
        value={snippet.language}
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
        "
      />



      <textarea
        name="description"
        placeholder="Short Description"
        value={snippet.description}
        onChange={handleChange}
        rows="3"

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
        "
      />



      <textarea
        name="code"
        placeholder="Paste your code here..."
        value={snippet.code}
        onChange={handleChange}
        rows="10"
        required

        className="
          w-full

          rounded-xl

          px-4
          py-3

          bg-black/50

          border
          border-white/10

          text-green-400

          font-mono

          text-sm

          placeholder:text-gray-600

          resize-none

          focus:outline-none

          focus:border-yellow-400

          focus:ring-4

          focus:ring-yellow-400/20
        "
      />



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
        {editingSnippet ? "Update Snippet" : "Create Snippet"}

      </button>


    </form>

  </div>
);
};

export default SnippetForm;