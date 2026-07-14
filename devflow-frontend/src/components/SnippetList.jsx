import SnippetCard from "./SnippetCard";

const SnippetList = ({ snippets, onEdit, onDelete }) => {
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