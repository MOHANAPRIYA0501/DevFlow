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
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">
        {editingSnippet ? "Edit Snippet" : "Create Snippet"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Snippet Title"
          value={snippet.title}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          name="language"
          placeholder="Language (Java, Python...)"
          value={snippet.language}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          name="description"
          placeholder="Short Description"
          value={snippet.description}
          onChange={handleChange}
          rows="3"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          name="code"
          placeholder="Paste your code here..."
          value={snippet.code}
          onChange={handleChange}
          rows="10"
          required
          className="w-full border rounded-lg p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
        >
          {editingSnippet ? "Update Snippet" : "Create Snippet"}
        </button>

      </form>
    </div>
  );
};

export default SnippetForm;