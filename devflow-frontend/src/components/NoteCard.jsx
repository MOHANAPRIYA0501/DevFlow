const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800">
        {note.title}
      </h3>

      <p className="text-gray-600 mt-3 whitespace-pre-wrap">
        {note.content}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <button
          onClick={() => onEdit(note)}
          className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;