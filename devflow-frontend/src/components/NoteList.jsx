import NoteCard from "./NoteCard";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="grid gap-5 mt-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;