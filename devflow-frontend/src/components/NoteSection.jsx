import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Spinner from "./Spinner";
import EmptyState from "./EmptyState";

const NoteSection = ({
  notes,
  loading,
  editingNote,
  setEditingNote,
  fetchNotes,
  handleEdit,
  handleDelete,
  searchTerm,
}) => {
  return (
    <>
      <NoteForm
        editingNote={editingNote}
        setEditingNote={setEditingNote}
        onNoteCreated={fetchNotes}
      />

<h2 className="text-2xl font-bold mt-8 mb-6">
  My Notes
</h2>

    {loading ? (
    <Spinner />
  ) : notes.length === 0 ? (
   <EmptyState
  icon="📝"
  title={
    searchTerm
      ? "No Notes Match Your Search"
      : "No Notes Yet"
  }
  message={
    searchTerm
      ? "Try searching with a different keyword."
      : "Create your first note to get started."
  }
/>
  ) : (
    <NoteList
      notes={notes}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )}
    </>
  );
};

export default NoteSection;