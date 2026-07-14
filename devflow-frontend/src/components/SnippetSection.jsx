import SnippetForm from "./SnippetForm";
import SnippetList from "./SnippetList";
import Spinner from "./Spinner";
import EmptyState from "./EmptyState";

const SnippetSection = ({
  snippets,
  loading,
  editingSnippet,
  setEditingSnippet,
  fetchSnippets,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <SnippetForm
        editingSnippet={editingSnippet}
        setEditingSnippet={setEditingSnippet}
        onSnippetCreated={fetchSnippets}
      />

      <h2 className="text-2xl font-bold mt-8 mb-6">
        My Snippets
      </h2>

      {loading ? (
        <Spinner />
      ) : snippets.length === 0 ? (
        <EmptyState
          icon="💻"
          title="No Snippets Yet"
          message="Save your first code snippet to get started."
        />
      ) : (
        <SnippetList
          snippets={snippets}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default SnippetSection;