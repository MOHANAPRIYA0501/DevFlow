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
  title="No Notes Yet"
  message="Create your first note to organize your ideas."
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