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
  searchTerm,
}) => {
  return (
    <>
      <div className="space-y-8"></div>
      <SnippetForm
        editingSnippet={editingSnippet}
        setEditingSnippet={setEditingSnippet}
        onSnippetCreated={fetchSnippets}
      />

     <h2
  className="
    text-2xl
    font-bold
    text-white

    mt-10
    mb-6
  "
>
  My Snippets
</h2>

      {loading ? (
        <Spinner />
      ) : snippets.length === 0 ? (
       <EmptyState
  icon="💻"
  title={
    searchTerm
      ? "No Snippets Match Your Search"
      : "No Snippets Yet"
  }
  message={
    searchTerm
      ? "Try searching with a different keyword."
      : "Save your first code snippet to get started."
  }
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