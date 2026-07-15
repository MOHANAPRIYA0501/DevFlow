import SnippetCard from "./SnippetCard";
import EmptyState from "./EmptyState";

const SnippetList = ({ snippets, onEdit, onDelete }) => {
  if (snippets.length === 0) {
    return (
      <EmptyState
        icon="💻"
        title="No Snippets Yet"
        message="Save your useful code snippets and access them anytime."
      />
    );
  }

  return (
    <div className="space-y-6 mt-6">
      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default SnippetList;